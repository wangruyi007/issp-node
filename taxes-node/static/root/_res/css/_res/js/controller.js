var app = angular.module('projectmeasure', []);
app.controller('projectmeasureCtrl', function ($scope,$state) {
    if ($state.current.url == '/projectmeasure') {//默认加载列表
         $state.go('root.projectmeasure.basicinfo');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='basicinfo';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'basicinfo';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
});

