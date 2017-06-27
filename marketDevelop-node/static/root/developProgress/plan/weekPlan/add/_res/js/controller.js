var app = angular.module('weekPlanAdd', ['toastr']);
app.controller('weekPlanAddCtrl', function($scope, weekPlanSer,$state,toastr){

    weekPlanSer.getWeekChoice().then(function(response){
        if(response.data.code == 0){
            $scope.weekGetmonth = response.data.data
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //添加
    $scope.weekPlanAddFun = function(){
        var vm = $scope;
        vm.week.startCycle = angular.element('.addStartCycle').val();
        vm.week.endCycle = angular.element('.addEndCycle').val();
        weekPlanSer.addWeekPlan(vm.week).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.weekPlan.list[12]');
                toastr.success("周计划已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




