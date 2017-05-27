var app = angular.module('recordAccount', []);
app.controller('recordAccountCtrl', function ($scope,$state) {
    if ($state.current.url == '/recordAccount') {//默认加载列表
        $state.go('root.recordAccount.voucherGeneration');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
    $scope.$on('seledIds',function(event,msg) {
        $scope.$broadcast('checkIds', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='voucherGeneration';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'voucherGeneration';
    $scope.navClass = function(name){
        $scope.navCla = name;
    }

});

