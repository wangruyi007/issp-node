var app = angular.module('statement', []);
app.controller('statementCtrl', function ($scope,$state) {
    if ($state.current.url == '/statement') {//默认加载列表
        $state.go('root.statement.info');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on("changeId",function(event,id){
        $scope.$broadcast("passId",id)
    });

}).controller('navCtrl',function($scope,$state,$location){
    var active =$location.path().split('/')[3];
    $scope.navCla=active?active:'basicinfo';
    $scope.navClass= function(name){
       $scope.navCla=name
    }
});

