var app = angular.module('dayEdit', ['toastr']);
app.controller('dayEditCtrl', function($scope, dayPlanSer,$stateParams,$state,toastr){
    var dayData ={id: $stateParams.id};

    dayPlanSer.daySearch(dayData).then(function(response){
        if(response.data.code == 0){
            $scope.editDay = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });

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
    //编辑
    $scope.dayPlanEditFun = function(){
        var vm = $scope;
        vm.editDay.time = angular.element('.editTime').val();
        dayPlanSer.editDayPlan(vm.editDay).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.dayPlan.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});




