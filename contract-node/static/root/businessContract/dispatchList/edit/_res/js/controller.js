var app = angular.module('dispatchEdit', ['toastr']);
app.controller('dispatchEditCtrl', function($scope, dispatchSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};

    //获取ID
    dispatchSer.findDispatchWorkersId(basicData).then(function(response){
        if(response.data.code==0){
            $scope.editSheet = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });


    //编辑点击提交
    $scope.workersEditFun = function(){
        var vm = $scope;
        vm.editSheet.siginTime = angular.element('.siginTime').val();
        vm.editSheet.startProjectTime = angular.element('.addTime').val();
        vm.editSheet.endProjectTime = angular.element('.endTime').val();
        dispatchSer.editDispatchWorkers(vm.editSheet).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.dispatchList.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
});





