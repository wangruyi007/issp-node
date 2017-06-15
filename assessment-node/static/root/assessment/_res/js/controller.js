var app = angular.module('assessment', []);
app.controller('assessmentCtrl', function ($scope,$state) {
    if ($state.current.url == '/assessment') {//默认加载列表
        $state.go('root.assessment.basicInfo');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='basicInfo';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'basicInfo';
    $scope.navClass = function(name){
        $scope.navCla = name;
    }
});

