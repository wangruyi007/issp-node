var app = angular.module('dayPlanDelete', ['toastr']);
app.controller('dayPlanDeleteCtrl',function($scope,dayPlanSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        }

        dayPlanSer.deleteDayPlan(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.developProgress.plan.dayPlan.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId);
                $scope.$emit('changeId', null);
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }


});


