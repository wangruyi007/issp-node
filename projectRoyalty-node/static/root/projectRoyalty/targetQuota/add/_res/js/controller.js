var app = angular.module('targetAdd', ['toastr']);
app.controller('targetAddCtrl', function($scope, targetSer,$state,toastr){
    if($scope.add) return;
    //获取目标权重
    targetSer.getWeightAllocation().then(function (response) {
        if(response.data.code==0){
            $scope.getWeightAllocations = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //添加
    $scope.targetAddFun = function(){
        var vm = $scope;
        targetSer.addTarget(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.targetQuota.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




