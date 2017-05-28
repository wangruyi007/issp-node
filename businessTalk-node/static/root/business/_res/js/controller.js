var app = angular.module('business', []);
app.controller('businessCtrl', function ($scope,$state) {
    if ($state.current.url == '/business') {//默认加载列表
         $state.go('root.business.contract');
    }
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='contract';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'contract';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
});
