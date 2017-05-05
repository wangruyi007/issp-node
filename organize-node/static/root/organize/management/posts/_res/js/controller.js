var app = angular.module('posts', [{
    files:[
        "root/organize/management/posts/_res/js/service.js"
    ]
}]);
app.controller('postsCtrl',function($scope,$state){

    if ($state.current.url == '/posts') {//默认加载列表
        $state.go('root.organize.management.posts.list')
    };



}).controller('postsMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.organize.management.posts.edit[12]',{id:$scope.getId});
            $scope.menuClass='editMenu';
        }
    };
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.organize.management.posts.list.delete[12]',{id:$scope.getId});
            $scope.menuClass='deleteMenu';
        }
    };
    $scope.congeal = function(){
        if($scope.getId){
            $state.go('root.organize.management.posts.list.congeal[12]',{id:$scope.getId});
            $scope.menuClass='congealMenu';
        }
    };
    $scope.explain = function(){
        if($scope.getId){
            $state.go('root.organize.management.posts.explain[12]', {id : $scope.getId});
            $scope.menuClass = 'explainMenu';
        }
    };
    $scope.view = function(){
        if($scope.getId){
            $state.go('root.organize.management.posts.view[12]', {id : $scope.getId});
            $scope.menuClass = 'viewMenu';
        }
    };

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});


