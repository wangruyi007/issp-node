var app = angular.module('infoAdd', ['toastr']);
app.controller('infoAddCtrl', function ($scope, infoSer, $state, toastr) {

    //添加
    $scope.infoAddFun = function () {
        var vm = $scope;
        vm.information.registrationTime = angular.element('.registrationTime').val();
        vm.information.biddingTime = angular.element('.biddingTime').val();
        vm.information.buyTenderTime = angular.element('.buyTenderTime').val();
        vm.information.marginTime = angular.element('.marginTime').val();
        vm.information.backTimeDeposit = angular.element('.backTimeDeposit').val();

        infoSer.addInfo(vm.information).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.biddingManagement.biddingInformation.list');
                toastr.success("已成功添加", '温馨提示');
            } else if (response.data.code == 403) {
                toastr.error("请登录用户", '温馨提示');
            }
        });

    };

});




