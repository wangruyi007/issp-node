var app = angular.module('app', ['ngVerify','ipCookie','toastr',
    'indexSerModule'
]);
app.controller('rootCtrl', function ($scope,$rootScope,$state,ipCookie,rootSer,$location,toastr) {
    if ($state.current.url == '/root') {//默认加载列表
        $state.go('root.ability');
    }
    $scope.username = ipCookie('username');
    if($scope.username==undefined){
        $scope.username="登录用户"
    }else {
        $scope.logined=true;
    }
    $scope.login = function(){
        var absurl = $location.absUrl();
        ipCookie('absUrl', absurl,{ expires:3,expirationUnit: 'minutes' });
        location.href="http://localhost/login";//部署到线上时要改为登录域名
    };
    $scope.logout = function(){
        var absurl = {absurl:$location.absUrl()};
        rootSer.userLogout(absurl).then(function(response){
            if(response.data.code==0){
                ipCookie.remove("username");
                location.href="http://localhost/user/logout"
            }
        })
    }
});
/*        $scope.searchs={show: false}
        $scope.search=function(){
            $scope.searchs.show=!$scope.searchs.show;
            $scope.searchs.hide=!$scope.searchs.hide;
        };*/

