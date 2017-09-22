var app = angular.module('targetEdit', ['toastr']);
app.controller('targetEditCtrl', function($scope, targetSer,$stateParams,$state,toastr){
    var targetData ={id: $stateParams.id};
    //获取ID
    targetSer.findTargetId(targetData).then(function(response){
        if(response.data.code==0){
            $scope.editTargets = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取权重分配
    targetSer.getWeightAllocation().then(function (response) {
        if(response.data.code==0){
            $scope.getWeightAllocations = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.targetEditFun = function(){
        var vm = $scope;
        targetSer.editTarget(vm.editTargets).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.targetQuota.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





