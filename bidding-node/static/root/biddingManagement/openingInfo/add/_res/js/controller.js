var app = angular.module('openingInfoAdd', ['toastr']);
app.controller('openingAddCtrl', function ($scope, openingSer, $state, toastr) {

    //添加
    $scope.openAddFun = function () {
        var vm = $scope;
        vm.opening.bidOpeningTime = angular.element('.bidOpeningTime').val();
        openingSer.addBidOpening(vm.opening).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.biddingManagement.openingInfo.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




