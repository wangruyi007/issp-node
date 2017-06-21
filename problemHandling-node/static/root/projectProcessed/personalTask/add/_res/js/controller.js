var app = angular.module('taskAdd', ['toastr']);
app.controller('taskAddCtrl', function ($scope, taskSer, $state, toastr) {

    //添加
    $scope.taskAddFun = function () {
        var vm = $scope;
        taskSer.addAssignment(vm.task).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.projectProcessed.personalTask.list');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

    //可手填的下拉框
    $scope.changeSelect = function () {
        $scope.task.handler = $scope.task.handler1;
    };
});




