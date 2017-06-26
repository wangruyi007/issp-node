var app = angular.module('weekPlanEdit', ['toastr']);
app.controller('weekPlanEditCtrl', function($scope, weekPlanSer,$stateParams,$state,toastr){
    var weekData ={weekId: $stateParams.id};

    //周计划id
    weekPlanSer.weekSearch(weekData).then(function(response){
        if(response.data.code == 0){
            $scope.editWeek = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //周计划编辑
    $scope.weekPlanEditFun = function(){
        var vm = $scope;
        weekPlanSer.editWeekPlan(vm.editWeek).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.weekPlan.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});





