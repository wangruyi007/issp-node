var app = angular.module('abandAdd', ['toastr']);
app.controller('abandAddCtrl', function ($scope, abandSer, $state, toastr) {

    //添加
    $scope.abandAddFun = function () {
        var vm = $scope;
        abandSer.abandAdd(vm.aband).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.insurance.abandon.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




