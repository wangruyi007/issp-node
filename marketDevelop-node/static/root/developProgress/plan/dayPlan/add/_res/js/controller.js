var app = angular.module('dayPlanAdd', ['toastr']);
app.controller('dayPlanAddCtrl', function($scope, dayPlanSer,$state,toastr){
    //获取业务类型
    dayPlanSer.getType().then(function(response){
        if(response.data.code==0){
            $scope.types = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取业务方向科目
    dayPlanSer.getCourse().then(function(response){
        if(response.data.code==0){
            $scope.courses = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //天计划添加
    $scope.dayPlanAddFun = function(){
        var vm = $scope;
        vm.day.time = angular.element('.addTime').val();
        dayPlanSer.addDayPlan(vm.day).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.dayPlan.list');
                toastr.success("天计划已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };


});




