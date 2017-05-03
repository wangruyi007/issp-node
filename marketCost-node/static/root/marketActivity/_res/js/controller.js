var app = angular.module('marketActivity', []);
app.controller('marketActivityCtrl', function ($scope,$state) {
    if ($state.current.url == '/marketActivity') {//默认加载列表
         $state.go('root.marketActivity.marketserve');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='marketserve';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'marketserve';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
});

