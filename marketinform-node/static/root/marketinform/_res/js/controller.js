var app = angular.module('marketinform', []);
app.controller('marketinformCtrl', function ($scope,$state) {
    if ($state.current.url == '/marketinform') {//默认加载列表
         $state.go('root.marketinform.information');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='information';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'information';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
});

