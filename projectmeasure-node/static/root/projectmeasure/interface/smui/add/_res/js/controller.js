/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('smuieAdd', ['toastr']);
app.controller('smuiAddCtrl', function($scope, smuiSer,$state,toastr){
    //添加竞争对手
    $scope.companyAddFun = function(){
        $scope.data.profit = Number($scope.num).toFixed(2);//利润
        var data = $scope.data;
        smuiSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.interface.smui.list');
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




