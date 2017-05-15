var app = angular.module('mainfee', [{
    files:[
        "root/socialfee/socialfee/mainfee/_res/js/service.js"
    ]
}]);
app.controller('mainfeeCtrl',function ($scope,$state) {
    if ($state.current.url == '/mainfee') {//默认加载列表
        $state.go('root.socialfee.socialfee.mainfee.list');
    }
}).controller('mainfeeMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.socialfee.socialfee.mainfee.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
            $scope.idList = "";//清空选择的 id
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.socialfee.socialfee.mainfee.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
            $scope.idList = "";//清空选择的 id
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    //添加
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    //查看
    $scope.view = function(){
        if($scope.idList){
            $state.go('root.socialfee.socialfee.mainfee.view[12]',{id:$scope.idList});
            $scope.menuClass = 'viewMenu'
            $scope.idList = "";//清空选择的 id
        }
    };
    //汇总  
    $scope.collect = function(){
        $scope.menuClass = 'collectMenu'
    };
     //
    $scope.generate = function(){
        if($scope.idList){
            $state.go('root.socialfee.socialfee.mainfee.generate[12]',{id:$scope.idList});
            $scope.menuClass = 'generateMenu';
            $scope.idList = "";//清空选择的 id
        }
    };
});