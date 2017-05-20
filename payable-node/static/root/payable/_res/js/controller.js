var app = angular.module('payable', []);
app.controller('payableCtrl', function ($scope,$state) {
    if ($state.current.url == '/payable') {//默认加载列表
        $state.go('root.payable.basicInfo');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='basicInfo';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'basicInfo';
    $scope.navClass = function(name){
        $scope.navCla = name;
    }

});

