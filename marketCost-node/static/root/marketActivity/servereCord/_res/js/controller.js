var app = angular.module('servereCord', [{
    files:[
        "root/marketActivity/servereCord/_res/js/service.js"
    ]
}]);
app.controller('servereCordCtrl',function ($scope,$state) {
     if ($state.current.url == '/marketserve') {//默认加载列表
        $state.go('root.marketActivity.servereCord.list');
    }
}).controller('servereCordMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.marketActivity.servereCord.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.marketActivity.servereCord.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    //添加市场
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    //添加客户信息
    $scope.addcustomer = function(){
        if($scope.idList){
            $scope.idList = '';//清空所有的id
            $state.go('root.marketActivity.servereCord.addcustomer[12]',{id:$scope.idList});
            $scope.menuClass = 'addcustomerMenu'
        }
    };
    //编辑 市场招待信息
    $scope.organize = function(){
        if($scope.idList){
             $state.go('root.marketActivity.servereCord.organize[12]',{id:$scope.idList});
            $scope.menuClass = 'organizeMenu'
        }
    }
    //编辑 决策层审核信息
    $scope.executiveOpinion = function(){
        if($scope.idList){
            $state.go('root.marketActivity.servereCord.executiveOpinion[12]',{id:$scope.idList});
            $scope.menuClass = 'executiveOpinionMenu'
        }
    }
});

