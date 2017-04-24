var app = angular.module('yearPlanEdit', ['toastr']);
app.controller('yearPlanEditCtrl', function($scope, yearPlanSer,$stateParams,$state,toastr){
    var yearData ={yearId: $stateParams.id};

    //年份
    yearPlanSer.yearSearch(yearData).then(function(response){
        if(response.data.code=='0'){
            $scope.editYear = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });


    // //客户编辑
    $scope.yearPlanEditFun = function(){

        var vm = $scope;
        var data = {
            id: vm.editYear.id,
            year: vm.editYear.year,
            type : vm.editYear.type,
            workloadWeight : vm.editYear.workloadWeight,
            course : vm.editYear.course,
            development : vm.editYear.development,
            businessAccounted : vm.editYear.businessAccounted,
            courseAccounted : vm.editYear.courseAccounted,
            quota : vm.editYear.quota
        };
        yearPlanSer.editYearPlan(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.yearPlan.list')
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
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





