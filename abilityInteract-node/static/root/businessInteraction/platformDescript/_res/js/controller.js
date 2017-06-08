var app = angular.module('platformDescript', [{
    files:[
        "root/businessInteraction/platformDescript/_res/js/service.js",
    ]
}]);
app.controller('descriptCtrl',function ($scope,$state) {
    if ($state.current.url == '/platformDescript') {//默认加载列表
        $state.go('root.businessInteraction.platformDescript.list')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('descriptMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });
    $scope.$on("onSearch", function(event, name){
        $scope.onSearch = name;
    });
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.businessInteraction.platformDescript.list.delete[12]',{id:$scope.idListd});
            $scope.menuClass = 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.businessInteraction.platformDescript.edit[12]',{id:$scope.idListd});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});

