/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('emailAdd', ['toastr','ipCookie']);
app.controller('emailAddCtrl', function($scope, emailSer,$state,toastr,$location,ipCookie){

    $scope.myFunc = function() {
        var type={type:$scope.type}
        emailSer.listNameType(type).then(function(response){
            if(response.data.code == 0){
                $scope.companyNames = response.data.data;
            }else if(response.data.code==403){
                toastr.error( response.data.msg , '温馨提示');
            }
        });
    };


    //添加个人能力
    $scope.emailAddFun = function(){
        var vm = $scope;
        var data = $scope.data;
        emailSer.addEmail(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.email.list');
                toastr.success( "竞争对手已成功添加", '温馨提示');
            }else if(response.data.code==403  || response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }else if(response.data.code == 1){
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
    //可手填的下拉框
    $scope.changeSelect=function(){
        $scope.addprofessionAuthen = $scope.addprofessionAuthen2;
    };
    $scope.changeSelect2=function(){
        $scope.addmanageAuthen = $scope.addmanageAuthen2;
    };
});





