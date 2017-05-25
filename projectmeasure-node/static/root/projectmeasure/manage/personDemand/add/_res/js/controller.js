/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('marketserveAdd', ['toastr','ipCookie']);
app.controller('personDemandAddCtrl', function($scope, marketserveSer,$state,toastr,ipCookie,$location){
    //添加竞争对手
    $scope.companyAddFun = function(){
        var data = $scope.data;
        marketserveSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.manage.personDemand.list');
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




