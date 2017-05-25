/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('generateApp', ['toastr','ipCookie']);
app.controller('generateCtrl',function($scope,mainfeeSer,toastr,$stateParams,$location,ipCookie,$state) {
    var companyId = {id : $stateParams.id};
//生成账号
    mainfeeSer.mainfeeGenerate(companyId).then(function(response){
        if(response.data.code==0){
            $scope.lists = response.data.data;
        }else{
            toastr.error('获取失败','温馨提示')
        }
    });
    //提交
    $scope.submit =function(){
        var data = $scope.lists;
         mainfeeSer.mainfeeVoucher(data).then(function(response){
            if(response.data.code==0){
                toastr.success('提交成功','温馨提示')
                $state.go('root.socialfee.socialfee.mainfee.list');
            }else{
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    }
});
