var app = angular.module('yearPlanAdd', ['toastr']);
app.controller('yearPlanAddCtrl', function($scope, yearPlanSer,$state,toastr){

    //年计划添加
    $scope.yearPlanAddFun = function(){
        var vm = $scope;
        var data = {
            year : vm.addYear,
            type : vm.addType,
            workloadWeight : vm.addWorkloadWeight,
            course : vm.addCourse,
            development : vm.addDevelopment,
            businessAccounted : vm.addBusinessAccounted,
            courseAccounted : vm.addCourseAccounted,
            quota : vm.addQuota
        };
        yearPlanSer.addYearPlan(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.yearPlan.list');
                toastr.success("年计划已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

    // 遍历年份
    $scope.yearArr=[];
    for (var y = 1990; y <= 2999; y++) {
        $scope.yearArr.push(y);
    }

});




