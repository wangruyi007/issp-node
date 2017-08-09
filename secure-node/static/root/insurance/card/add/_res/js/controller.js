var app = angular.module('cardAdd', ['toastr']);
app.controller('cardAddCtrl', function ($scope, cardSer, $state, toastr) {

    //添加
    $scope.cardAddFun = function () {
        var vm = $scope;
        vm.card.reapply = angular.element('.reapply').val();
        cardSer.cardAdd(vm.card).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.insurance.card.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




