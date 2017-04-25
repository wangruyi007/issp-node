var app = angular.module('dayPlanEdit', ['toastr']);
app.controller('dayPlanEditCtrl', function($scope, dayPlanSer,$stateParams,$state,toastr){
    var dayData ={dayId: $stateParams.id};

    dayPlanSer.daySearch(dayData).then(function(response){
        if(response.data.code=='0'){
            $scope.editDay = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });


    //编辑
    $scope.dayPlanEditFun = function(){
        var vm = $scope;
        dayPlanSer.editDayPlan(vm.editDay).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.dayPlan.list')
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };


});





