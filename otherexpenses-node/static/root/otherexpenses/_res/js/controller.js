var app = angular.module('otherexpenses', []);
app.controller('otherexpensesCtrl', function ($scope,$state) {
    if ($state.current.url == '/otherexpenses') {//默认加载列表
         $state.go('root.otherexpenses.expenses');
    }
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='message';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'message';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
});
