var app = angular.module('standardAdd', ['toastr','ipCookie']);
app.controller('standardAddCtrl', function($scope,$state,toastr,standardSer,$location,ipCookie){

    $scope.standardAddFun = function(){
        $scope.add.date=angular.element('.time').val();
        standardSer.addStandard($scope.add).then(function(response){
            console.info($scope.add);
            if(response.data.code == 0){
                $state.go('root.contract.standard.list');
                toastr.success( $scope.add.projectInner+"已成功添加", '温馨提示');
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





