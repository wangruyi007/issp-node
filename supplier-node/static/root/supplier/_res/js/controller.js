var app = angular.module('supplier', []);
app.controller('supplierCtrl', function ($scope,$state) {
    if ($state.current.url == '/supplier') {//默认加载列表
        $state.go('root.supplier.basicinfo');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('listId', msg)
    });
    $scope.$on('socialListId',function(event,msg) {
        $scope.$broadcast('socialListId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='basicinfo';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'basicinfo';
    $scope.navClass = function(name){
        $scope.navCla = name;
    }

});

