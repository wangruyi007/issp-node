var app = angular.module('yearPlanAdd', ['toastr']);
app.controller('yearPlanAddCtrl', function($scope, yearPlanSer,$state,toastr){
    //获取业务类型
    yearPlanSer.getType().then(function(response){
        if(response.data.code==0){
            $scope.types = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取业务方向科目
    yearPlanSer.getCourse().then(function(response){
        if(response.data.code==0){
            $scope.courses = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //年计划添加
    $scope.yearPlanAddFun = function(){
        var vm = $scope;
        yearPlanSer.addYearPlan(vm.addYear).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.yearPlan.list');
                toastr.success("年计划已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

    // 遍历年份
    $scope.yearArr=[];
    for (var y = 1990; y <= 2999; y++) {
        $scope.yearArr.push(y);
    }

});




