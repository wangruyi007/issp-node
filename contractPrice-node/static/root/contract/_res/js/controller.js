var app = angular.module('business', []);
app.controller('businessCtrl', function ($scope,$state) {
    if ($state.current.url == '/contract') {//默认加载列表
        $state.go('root.contract.basicinfo');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on("changeId",function(event,id){
        $scope.$broadcast("passId",id)
    });
    $scope.$on("changePositionId",function(event,id){
        $scope.$broadcast("passPositionId",id)
    })

}).controller('navCtrl',function($scope,$state,$location){

    var active =$location.path().split('/')[3];
    $scope.navCla=active?active:'basicinfo';
    $scope.navClass= function(name){
       $scope.navCla=name
    }
});

