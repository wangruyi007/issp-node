var app = angular.module('reduAgoAdd', ['toastr']);
app.controller('reduAgoAddCtrl', function ($scope, reduAgoSer, $state, toastr) {

    //添加
    $scope.reduAgoAddFun = function () {
        var vm = $scope;
        reduAgoSer.reduAgoAdd(vm.reduAgo).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.insurance.reducingAgo.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




