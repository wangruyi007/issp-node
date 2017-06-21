var app = angular.module('labourAdd', ['toastr']);
app.controller('labourAddCtrl', function ($scope, labourSer,$state, toastr) {
    labourSer.allLabourProjects().then(function(response){
        if(response.data.code == 0){
            $scope.labData = response.data.data;
        }
    });
    //添加
    $scope.labourAddFun = function () {
        var vm = $scope;
        projectInfoId=vm.add.projectInfoId;
        labourSer.addLabour(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.assessment.labour.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});




