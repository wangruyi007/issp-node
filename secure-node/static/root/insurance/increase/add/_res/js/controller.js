var app = angular.module('increAdd', ['toastr']);
app.controller('increAddCtrl', function ($scope, increSer, $state, toastr) {

    //添加
    $scope.increAddFun = function () {
        var vm = $scope;
        vm.incre.startTime = angular.element('.startTime').val();
        vm.incre.officialTime = angular.element('.officialTime').val();
        increSer.increAdd(vm.incre).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.insurance.increase.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




