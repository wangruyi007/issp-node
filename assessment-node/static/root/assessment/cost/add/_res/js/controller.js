var app = angular.module('costAdd', ['toastr']);
app.controller('costAddCtrl', function ($scope, costSer,$state, toastr) {
    costSer.allCostProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.costAddFun = function () {
        var vm = $scope;
        projectInfoId=vm.add.projectInfoId;
        costSer.addCost(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.assessment.cost.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});




