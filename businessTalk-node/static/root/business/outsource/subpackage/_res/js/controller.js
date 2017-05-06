var app = angular.module('subpackage', [{
    files:[
        "root/business/outsource/subpackage/_res/js/service.js"
    ]
}]);
app.controller('subpackageCtrl',function ($scope,$state) {
    if ($state.current.url == '/subpackage') {//默认加载列表
        $state.go('root.business.outsource.subpackage.list');
    }
}).controller('subpackageMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.business.outsource.subpackage.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.business.outsource.subpackage.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
            $scope.idList = ""
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    //添加市场
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
        $scope.idList = ""
    };
    //汇总
    $scope.collect = function(){
        $scope.menuClass = 'collectMenu'
        $scope.idList = ""
    };
});