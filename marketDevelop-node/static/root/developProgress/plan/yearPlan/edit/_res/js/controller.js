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
        yearPlanSer.editYearPlan(vm.editYear).then(function(response){
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





