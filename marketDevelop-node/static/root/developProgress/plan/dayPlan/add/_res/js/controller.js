var app = angular.module('dayPlanAdd', ['toastr']);
app.controller('dayPlanAddCtrl', function($scope, dayPlanSer,$state,toastr){

    //天计划添加
    $scope.dayPlanAddFun = function(){
        var vm = $scope;
        vm.day.time = angular.element('.addTime').val();
        dayPlanSer.addDayPlan(vm.day).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.dayPlan.list');
                toastr.success("天计划已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };


});




