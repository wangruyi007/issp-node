var app = angular.module('managementFee', []);
app.controller('managementFeeCtrl', function ($scope,$state) {
    if ($state.current.url == '/managementFee') {//默认加载列表
        $state.go('root.managementFee.managementSpend');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='managementSpend';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'managementSpend';
    $scope.navClass = function(name){
        $scope.navCla = name;
    }

});

