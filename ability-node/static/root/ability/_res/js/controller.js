var app = angular.module('ability', []);
app.controller('abilityCtrl', function ($scope,$state) {
    if ($state.current.url == '/ability') {//默认加载列表
         $state.go('root.ability.companycap');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='companycap';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'companycap';
   // $scope.navCla=$location.path().split('/')[3]
    $scope.navClass= function(name){
        $scope.navCla=name
    }
});

