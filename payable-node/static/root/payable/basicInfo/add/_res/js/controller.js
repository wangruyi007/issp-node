var app = angular.module('basicInfoAdd', ['toastr']);
app.controller('basicInfoAddCtrl', function ($scope, basicInfoSer, $state, toastr) {
    //添加
    $scope.basicInfoAddFun = function () {
        var vm = $scope;
        vm.add.taxDate = angular.element('.taxDate').val();
        basicInfoSer.addBasicInfo(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.payable.basicInfo.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});




