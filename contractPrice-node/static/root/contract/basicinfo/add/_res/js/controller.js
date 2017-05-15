var app = angular.module('basicinfoAdd', ['toastr','ipCookie']);
app.controller('basicinfoAddCtrl', function($scope,$state,toastr,basicinfoSer,ipCookie,$location){

    $scope.basicAddFun = function(){
        $scope.add.startTime=angular.element('.starttime').val();
        $scope.add.endTime=angular.element('.endtime').val();
        basicinfoSer.addBasicinfo($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.basicinfo.list');
                toastr.success( $scope.add.area+"已成功添加", '温馨提示');
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





