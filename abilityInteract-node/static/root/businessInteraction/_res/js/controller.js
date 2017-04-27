var app = angular.module('interact', []);
app.controller('interactCtrl', function ($scope,$state) {
    if ($state.current.url == '/businessInteraction') {//默认加载列表
        $state.go('root.businessInteraction.interactContact');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='interactContact';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'interactContact';
    $scope.navClass = function(name){
        $scope.navCla = name;
    }

});

