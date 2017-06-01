
var app = angular.module('servecustomerAdd', ['toastr','ipCookie']);
app.controller('servereCordAddcustomerCtrl', function($scope, servereCordSer,$state,toastr,ipCookie,$location){
    //添加竞争对手
    $scope.customerAddFun = function(){
        var data = $scope.data;
        servereCordSer.addCustomerinfo(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketActivity.servereCord.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403  || response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});




