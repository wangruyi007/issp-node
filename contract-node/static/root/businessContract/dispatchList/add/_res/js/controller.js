var app = angular.module('dispatchAdd', ['toastr']);
app.controller('dispatchAddCtrl', function($scope, dispatchSer,$state,toastr){
    //获取内部项目编号
    dispatchSer.getInnerNum().then(function(response){
        if(response.data.code==0){
            $scope.inner= response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取项目合同
    $scope.selPro = function(val){
        if(val){
            var data = {innerProjectNum:val};
            dispatchSer.getProjectNum(data).then(function(response){
                if(response.data.code==0){
                    $scope.projectNum= response.data.data;
                }else{
                    toastr.error(response.data.msg, '温馨提示');
                }
            });
        }else {
            $scope.projectNum = null;
        }
    };
    //添加
    $scope.workersAddFun = function(){
        var vm = $scope;
        vm.workers.siginTime = angular.element('.siginTime').val();
        vm.workers.startProjectTime = angular.element('.addTime').val();
        vm.workers.endProjectTime = angular.element('.endTime').val();
        dispatchSer.addDispatchWorkers(vm.workers).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.dispatchList.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };

});




