var app = angular.module('record', [{
    files:[
        "root/compete/record/_res/js/service.js"
    ]
}]);
app.controller('recordCtrl',function ($scope,$state) {
    if ($state.current.url == '/record') {
        $state.go('root.compete.record.list');
    }
}).controller('recordMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
        $scope.idList = id;
    });

    $scope.$on("onSearch", function(event, name){
        $scope.onSearch = name;
    });
    

    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.compete.record.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.compete.record.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.monthAll = function(){
        $scope.menuClass = 'monthAllMenu'
    };
    $scope.conditionsAll = function(){
        $scope.menuClass = 'conditionsAllMenu'
    };
    $scope.area = function(){
        $scope.menuClass = 'areaMenu'
    };
    $scope.project = function(){
        $scope.menuClass = 'projectMenu'
    };
    $scope.group = function(){
        $scope.menuClass = 'groupMenu'
    };
});
