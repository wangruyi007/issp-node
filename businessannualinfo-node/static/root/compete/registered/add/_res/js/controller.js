var app = angular.module('registeredAdd', ['toastr','ipCookie']);
app.controller('registeredAddCtrl', function($scope, registeredSer,$state,toastr,ipCookie,$location){
    //添加个人能力
    $scope.registeredAddFun = function(){
        var data = $scope.data;
        registeredSer.loginadd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.registered.list');
                toastr.success( "公司信息已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){

                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});



