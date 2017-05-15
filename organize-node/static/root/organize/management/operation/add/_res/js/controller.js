var app = angular.module('operationAdd', ['toastr','ipCookie']);
app.controller('operationAddCtrl', function($scope,$state,toastr,operationSer,$location,ipCookie){

    $scope.operationAddFun = function(){
        var vm = $scope;
        operationSer.addOperation(vm.operation).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.operation.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        });
    };
});





