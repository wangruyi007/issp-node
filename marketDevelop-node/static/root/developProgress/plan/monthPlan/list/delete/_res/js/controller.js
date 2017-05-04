var app = angular.module('monthPlanDelete', ['toastr']);
app.controller('monthPlanDeleteCtrl',function($scope,monthPlanSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){
        console.log(123);
        var data = {
            id :$stateParams.id
        };

        monthPlanSer.deleteMonthplan(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.developProgress.plan.monthPlan.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId);
                $scope.$emit('changeId', null);
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});


