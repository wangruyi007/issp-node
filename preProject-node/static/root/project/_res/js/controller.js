var app = angular.module('business', []);
app.controller('businessCtrl', function ($scope,$state) {
    if ($state.current.url == '/project') {//默认加载列表
        $state.go('root.project.warning');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on("changeId",function(event,id){
        $scope.$broadcast("passId",id)
    });
    $scope.$on('changeSocialListId',function(event,msg) {
        $scope.$broadcast('socialListId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    var active =$location.path().split('/')[3];
    $scope.navCla=active?active:'warning';
    $scope.navClass= function(name){
       $scope.navCla=name
    }
});

