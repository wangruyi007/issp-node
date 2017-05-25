/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('marketservecustomerAdd', ['toastr','ipCookie']);
app.controller('marketserveAddcustomerCtrl', function($scope, marketserveSer,$state,toastr,$location,ipCookie){
    //添加
    $scope.customerAddFun = function(){
        var data = $scope.data;
        marketserveSer.addCustomerinfo(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketActivity.marketserve.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403  || response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
});




