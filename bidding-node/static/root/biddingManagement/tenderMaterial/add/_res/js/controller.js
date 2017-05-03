var app = angular.module('MaterialAdd', ['toastr']);
app.controller('MaterialAddCtrl', function ($scope, MaterialSer, $state, toastr) {

    //添加
    $scope.tenderAddFun = function () {
        var vm = $scope;
        MaterialSer.addSource(vm.tender).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.biddingManagement.tenderMaterial.list');
                toastr.success("已成功添加", '温馨提示');
            } else if (response.data.code == 403) {
                toastr.error("请登录用户", '温馨提示');
            }
        });

    };

});




