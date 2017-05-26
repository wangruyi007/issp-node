/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('giftAdd', ['toastr','ipCookie']);
app.controller('giftAddCtrl', function($scope, giftSer,$state,toastr,ipCookie,$location){
    //添加
    $scope.AddFun = function(){
        $scope.data.startTime = angular.element('.startTiming').val();//计划时间
        var data = $scope.data;
        giftSer.addMarketserveapply1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.legalholiday.holiday.gift.list');
                toastr.success( "已成功添加", '温馨提示');
           }else if(response.data.code==403){
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




