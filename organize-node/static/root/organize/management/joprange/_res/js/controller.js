var app = angular.module('joprange', [{
    files:[
        "root/organize/management/joprange/_res/js/service.js"
    ]
}]);
app.controller('joprangeCtrl',function($scope,$state){

    if ($state.current.url == '/moduletype') {//默认加载列表
        $state.go('root.organize.management.joprange.list')
    };



}).controller('joprangeMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    $scope.$on("passId",function(event,id){
        $scope.getId = id;
    });
    $scope.edit = function(){
        if($scope.getId){
            $state.go('root.organize.management.joprange.edit[12]',{id:$scope.getId});
            $scope.menuClass='editMenu';
        }
    };
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.organize.management.joprange.list.delete[12]',{id:$scope.getId});
            $scope.menuClass='deleteMenu';
        }
    };
    $scope.congeal = function(){
        if($scope.getId){
            $state.go('root.organize.management.joprange.list.congeal[12]',{id:$scope.getId});
            $scope.menuClass='congealMenu';
        }
    };

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});


