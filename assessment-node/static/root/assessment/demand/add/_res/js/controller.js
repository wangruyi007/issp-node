var app = angular.module('demandAdd', ['toastr']);
app.controller('demandAddCtrl', function ($scope, demandSer,$state, toastr) {
    demandSer.allProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //添加
    $scope.demandAddFun = function () {
        var vm = $scope;
        projectInfoId=vm.add.projectInfoId;
        demandSer.addDemand(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.assessment.demand.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});




