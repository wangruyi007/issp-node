var app = angular.module('systemAdd', ['toastr','ipCookie']);
app.controller('systemAddCtrl', function($scope,$state,toastr,systemSer,ipCookie,$location){

    $scope.systemAddFun = function(){
        var vm = $scope;
        var data = {
            serialNumber : vm.serialNumber,
            hierarchy : vm.hierarchy,
            description : vm.description,
        };
        systemSer.addSystem(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.system.list');
                toastr.success( vm.serialNumber+"已成功添加", '温馨提示');
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





