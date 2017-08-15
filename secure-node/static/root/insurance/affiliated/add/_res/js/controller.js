var app = angular.module('affilAdd', ['toastr']);
app.controller('affilAddCtrl', function ($scope, affilSer, $state, toastr) {

    //添加
    $scope.affilAddFun = function () {
        var vm = $scope;
        affilSer.affilAdd(vm.affil).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.insurance.affiliated.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




