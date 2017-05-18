/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('festivaltimeAdd', ['toastr']);
app.controller('festivaltimeAddCtrl', function($scope, festivaltimeSer,$state,toastr){
    //添加
    $scope.AddFun = function(){
        $scope.data.companyStartTime = angular.element('.startTime').val();
        $scope.data.companyEndTime = angular.element('.endTime').val();
        $scope.data.takeTime = angular.element('.takeTime').val();
        $scope.data.offTime = angular.element('.offTime').val();
        var data = $scope.data;
        festivaltimeSer.addMarketserveapply1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.legalholiday.holiday.festivaltime.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
});




