var app = angular.module('weekPlanAdd', ['toastr']);
app.controller('weekPlanAddCtrl', function($scope, weekPlanSer,$state,toastr){

    weekPlanSer.getWeekChoice().then(function(response){

        if(response.data.code == 0){
            $scope.weekGetmonth = response.data.data
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });

    //添加
    $scope.weekPlanAddFun = function(){
        var vm = $scope;
        var data = {
            month_id: vm.weekGetmonth.month_id,
            monthTotal : vm.addMonthTotal,
            course : vm.addCourse,
            startCycle : angular.element('.addStartCycle').val(),
            endCycle : angular.element('.addEndCycle').val(),
            accounted : vm.addDaccounted,
            inquire : vm.addInquire,
            know : vm.addKnow,
            contact : vm.addContact,
            visit : vm.addVisit,
            activity : vm.addActivity
        };
        weekPlanSer.addWeekPlan(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.weekPlan.list');
                toastr.success("周计划已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

});




