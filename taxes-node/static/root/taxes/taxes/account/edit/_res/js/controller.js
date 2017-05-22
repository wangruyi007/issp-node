/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('accountEdit', ['toastr','ipCookie']);
app.controller('accountEditCtrl', function($scope, accountSer,$state,toastr,$stateParams,ipCookie,$location){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据
    accountSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.EditFun =function(){
        var data = $scope.data;
        $scope.data.month = angular.element('.month').val();//月份
        accountSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.taxes.taxes.account.list');
                toastr.success('温馨提示',"此次编辑成功");
            }else if(response.data.code==403  || response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });;
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        })
    }
});
   