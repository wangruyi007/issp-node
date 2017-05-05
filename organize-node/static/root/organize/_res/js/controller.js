var app = angular.module('organize', []);
app.controller('organizeCtrl', function ($scope,$state) {
    if ($state.current.url == '/organize') {//默认加载列表
        $state.go('root.organize.views');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
    $scope.$on('changeCusnum',function(event,num){
        $scope.$broadcast('getCustomer',num)
    });
    $scope.$on('changeLevelName',function(event,name){
        $scope.$broadcast('levelName',name)
    });

}).controller('navCtrl',function($scope,$state,$location){

    var active =$location.path().split('/')[3];
    $scope.navCla=active?active:'basicinfo';
    $scope.navClass= function(name){
       $scope.navCla=name
    }
});

