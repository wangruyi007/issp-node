var app = angular.module('socialfee1', []);
app.controller('socialfee1Ctrl', function ($scope,$state) {
    if ($state.current.url == '/socialfee') {//默认加载列表
         $state.go('root.socialfee.socialfee');
    }
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='mainfee';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'mainfee';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
});
