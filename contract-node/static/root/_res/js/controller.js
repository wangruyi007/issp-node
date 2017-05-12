var app = angular.module('app', ['ngVerify','ipCookie',
    'indexSerModule'
]);
app.controller('rootCtrl', function ($scope,$rootScope,$state,ipCookie,rootSer) {
    if ($state.current.url == '/root') {//默认加载列表
        $state.go('root.businessContract');
    }
    $scope.username = ipCookie('username');
    $scope.logout = function(){
        rootSer.logout().then(function(response){
            if(response.data.code==0){
                ipCookie.remove("username");
                $scope.username="";
            }
        })
    }
});
