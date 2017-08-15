var app = angular.module('protionAdd', ['toastr']);
app.controller('protionAddCtrl', function ($scope, protionSer, $state, toastr) {

    //添加
    $scope.protionAddFun = function () {
        var vm = $scope;
        protionSer.protionAdd(vm.protion).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.insurance.proportion.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




