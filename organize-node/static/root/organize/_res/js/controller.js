var app = angular.module('organize', []);
app.controller('organizeCtrl', function ($scope,$state) {
    if ($state.current.url == '/organize') {//默认加载列表
        $state.go('root.organize.management');
    }


}).controller('navCtrl',function($scope,$state,$location){

    var active =$location.path().split('/')[4];
    $scope.navCla=active?active:'views';
    $scope.navClass= function(name){
       $scope.navCla=name
    }
});


