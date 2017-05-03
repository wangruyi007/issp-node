/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('serveCordAdd', ['toastr']);
app.controller('serverecordAddCtrl', function($scope, servereCordSer,$state,toastr){
    //添加竞争对手
    $scope.companyAddFun = function(){
        $scope.data.planActivityTiming = angular.element('.addPlanTime').val();//计划时间
        $scope.data.actualActivityTiming = angular.element('.addActualTime').val();//实际时间
        $scope.data.actualActivityTiming = '2015-01-27 10:11:12';//实际时间报错
        $scope.data.predictCharge = Math.floor($scope.num*100) / 100;//预计费用
        var data = $scope.data;
        servereCordSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketActivity.servereCord.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
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




