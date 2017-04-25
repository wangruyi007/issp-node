var app = angular.module('progress', []);
app.controller('progressCtrl', function ($scope,$state,) {
    if ($state.current.url == '/developProgress') {//默认加载列表
        $state.go('root.developProgress.plan');
    }

}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='yearPlan';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'yearPlan';
    $scope.navClass = function(name){
        $scope.navCla = name;

    }
});
