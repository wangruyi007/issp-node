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
                $state.go('root.assessment.labour.list');
                toastr.success("已成功添加", '温馨提示');
            } else if (response.data.code == 403) {
                toastr.error("请登录用户", '温馨提示');
            }
        });
    };
    //添加可手填的下拉框
   /* $scope.changeSelect=function(){
        $scope.add.projectInfoId = $scope.add.projectInfoId2;
    };*/
});




