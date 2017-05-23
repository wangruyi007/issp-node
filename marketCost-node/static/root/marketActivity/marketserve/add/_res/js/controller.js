/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('marketserveAdd', ['toastr','ipCookie']);
app.controller('marketserveAddCtrl', function($scope, marketserveSer,$state,toastr,ipCookie,$location){
    //添加竞争对手
    $scope.companyAddFun = function(){
        $scope.data.planActivityTiming = angular.element('.addPlanTime').val();//计划时间
        $scope.data.actualActivityTiming = angular.element('.addActualTime').val();//实际时间
        $scope.data.predictCharge = Number($scope.num).toFixed(2);//预计费用
        var data = $scope.data;
        marketserveSer.addMarketserveapply(data).then(function(response){
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
    //控制数字不能小于1
    $scope.changeNum =function(){
        if($scope.data.predictAttendNo < 1){
            $scope.data.predictAttendNo = 1;
        }
    }
});




