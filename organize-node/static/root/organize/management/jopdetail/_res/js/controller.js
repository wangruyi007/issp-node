var app = angular.module('jopdetail', []);
app.controller('jopdetailCtrl',function($scope,$state){

    if ($state.current.url == '/jopdetail') {//默认加载列表
        $state.go('root.organize.management.jopdetail.list')
    };



}).controller('jopdetailMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});


