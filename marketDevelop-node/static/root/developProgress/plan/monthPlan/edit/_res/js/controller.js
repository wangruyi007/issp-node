var app = angular.module('monthPlanEdit', ['toastr']);
app.controller('monthPlanEditCtrl', function($scope, monthPlanSer,$stateParams,$state,toastr){
    var monthData ={monthId: $stateParams.id};

    //年份
    monthPlanSer.getMonth(monthData).then(function(response){
        if(response.data.code=='0'){
            console.log(response)
            $scope.editMonth = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });

    //
    // //客户编辑
    $scope.monthPlanEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.editMonth.id,
            year_id : vm.editMonth.year_id,
            month : vm.editMonth.month,
            quota : vm.editMonth.quota,
            accounted : vm.editMonth.accounted,
            courseAccounted : vm.editMonth.courseAccounted,
            leastQuota : vm.editMonth.leastQuota
        };
        monthPlanSer.monthPlanEdit(data).then(function(response){
            console.log(response);
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.monthPlan.list')
                toastr.success("编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };



});





