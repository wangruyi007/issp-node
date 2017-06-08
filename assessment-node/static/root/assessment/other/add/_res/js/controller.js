var app = angular.module('otherAdd', ['toastr']);
app.controller('otherAddCtrl', function ($scope, otherSer,$state, toastr) {
    otherSer.allOtherProjects().then(function(response){
            if(response.data.code == 0){
                $scope.otherData = response.data.data;
            }
    });
    //添加
    $scope.otherAddFun = function () {
        var vm = $scope;
        projectInfoId=vm.add.projectInfoId;
        otherSer.addOther(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.assessment.other.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});




