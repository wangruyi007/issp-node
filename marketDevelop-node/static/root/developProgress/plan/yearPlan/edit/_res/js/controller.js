var app = angular.module('yearPlanEdit', ['toastr']);
app.controller('yearPlanEditCtrl', function($scope, yearPlanSer,$stateParams,$state,toastr){
    var yearData ={yearId: $stateParams.id};

    //id
    yearPlanSer.yearSearch(yearData).then(function(response){
        if(response.data.code==0){
            $scope.editYear = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });

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
    // //客户编辑
    $scope.yearPlanEditFun = function(){
        var vm = $scope;
        yearPlanSer.editYearPlan(vm.editYear).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.yearPlan.list[12]');
                toastr.success( "编辑成功", '温馨提示');
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





