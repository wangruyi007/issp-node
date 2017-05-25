var app = angular.module('payment', []);
app.controller('paymentCtrl', function ($scope,$state) {
    if ($state.current.url == '/payment') {//默认加载列表
        $state.go('root.payment.detail');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
    $scope.$on('socialListId',function(event,msg) {
        $scope.$broadcast('socialListId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='detail';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'detail';
    $scope.navClass = function(name){
        $scope.navCla = name;
    }

});

