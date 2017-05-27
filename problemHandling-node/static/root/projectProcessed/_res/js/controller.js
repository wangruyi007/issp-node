var app = angular.module('processed', []);
app.controller('processedCtrl', function ($scope,$state) {
    if ($state.current.url == '/projectProcessed') {//默认加载列表
        $state.go('root.projectProcessed.problemAccepted');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='problemAccepted';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'problemAccepted';
    $scope.navClass = function(name){
        $scope.navCla = name;
    }

});

