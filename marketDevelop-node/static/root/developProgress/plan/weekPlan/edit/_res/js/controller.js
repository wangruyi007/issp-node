var app = angular.module('weekPlanEdit', ['toastr']);
app.controller('weekPlanEditCtrl', function($scope, weekPlanSer,$stateParams,$state,toastr){
    var weekData ={weekId: $stateParams.id};

    //周计划id
    weekPlanSer.weekSearch(weekData).then(function(response){
        if(response.data.code=='0'){
            $scope.editWeek = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });


    //周计划编辑
    $scope.weekPlanEditFun = function(){
        var vm = $scope;
        var data = {
            month_id: vm.editWeek.month_id,
            monthTotal : vm.editWeek.monthTotal,
            course : vm.editWeek.course,
            startCycle : vm.editWeek.startCycle,
            endCycle : vm.editWeek.endCycle,
            accounted : vm.editWeek.accounted,
            inquire : vm.editWeek.inquire,
            know : vm.editWeek.know,
            contact : vm.editWeek.contact,
            visit : vm.editWeek.visit,
            activity : vm.editWeek.activity
        };
        weekPlanSer.editWeekPlan(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.weekPlan.list')
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

});





