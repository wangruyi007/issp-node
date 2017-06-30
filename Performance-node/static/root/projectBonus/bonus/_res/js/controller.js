var app = angular.module('bonus', [{
    files:[
        "root/projectBonus/bonus/_res/js/service.js"
    ]
}]);
app.controller('bonusCtrl',function ($scope,$state) {
    if ($state.current.url == '/bonus') {
        $state.go('root.projectBonus.bonus.list');
    }
}).controller('bonusMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.projectBonus.bonus.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.projectBonus.bonus.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    };
    //启动
    $scope.thaw = function(){
        if($scope.idList){
            $state.go('root.projectBonus.bonus.list.thaw[12]',{id:$scope.idList});
            $scope.menuClass = 'thawMenu'
        }
    };
    //关闭
    $scope.freeze = function(){
        if($scope.idList){
            $state.go('root.projectBonus.bonus.list.freeze[12]',{id:$scope.idList});
            $scope.menuClass = 'freezeMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});
