var app = angular.module('project', []);
app.controller('projectCtrl', function ($scope,$state) {
    if ($state.current.url == '/project') {//默认加载列表
         $state.go('root.project.situation');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='situation';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'situation';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
});

