var app = angular.module('legalholiday', []);
app.controller('legalholidayCtrl', function ($scope,$state) {
    if ($state.current.url == '/legalholiday') {//默认加载列表
         $state.go('root.legalholiday.holiday');
    }
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='gift';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'gift';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
});
