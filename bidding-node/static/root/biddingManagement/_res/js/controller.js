var app = angular.module('bidding', []);
app.controller('biddingCtrl', function ($scope,$state) {
    if ($state.current.url == '/biddingManagement') {//默认加载列表
        $state.go('root.biddingManagement.websiteInfo');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='websiteInfo';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'websiteInfo';
    $scope.navClass = function(name){
        $scope.navCla = name;
    }

});

