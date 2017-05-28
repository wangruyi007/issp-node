var app = angular.module('projectmeasure', []);
app.controller('projectmeasureCtrl', function ($scope,$state) {
    if ($state.current.url == '/projectmeasure') {//默认加载列表
         $state.go('root.projectmeasure.manage');
    }
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='basicinfo';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'basicinfo';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
});
