var app = angular.module('taskAdd', ['toastr','ipCookie']);
app.controller('taskAddCtrl', function ($scope, taskSer, $state, toastr,$location,ipCookie) {

    //添加
    $scope.taskAddFun = function () {
        var vm = $scope;
        taskSer.addAssignment(vm.task).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.projectProcessed.personalTask.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login';
                },2000)
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
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




