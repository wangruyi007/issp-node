var app = angular.module('incomeAccount1', []);
app.controller('incomeAccountCtrl', function ($scope,$state) {
    if ($state.current.url == '/incomeAccount') {//默认加载列表
         $state.go('root.incomeAccount.check');
    }
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='checkindex';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'checkindex';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
});
