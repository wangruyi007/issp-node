var app = angular.module('contract', []);
app.controller('contractCtrl', function ($scope,$state) {
    if ($state.current.url == '/businessContract') {//默认加载列表
        $state.go('root.businessContract.signingProject');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='signingProject';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'signingProject';
    $scope.navClass = function(name){
        $scope.navCla = name;
    }

});

