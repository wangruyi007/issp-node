var app = angular.module('personDemand', [{
    files:[
        "root/projectmeasure/manage/personDemand/_res/js/service.js"
    ]
}]);
app.controller('personDemandCtrl',function ($scope,$state) {
    if ($state.current.url == '/personDemand') {//默认加载列表
        $state.go('root.projectmeasure.manage.personDemand.list');
    }
}).controller('personDemandMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.projectmeasure.manage.personDemand.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
            $scope.idList = "";
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.projectmeasure.manage.personDemand.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu';
             $scope.idList = "";
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    //添加市场
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});

//设置自定义过滤器
app.filter('cover',function(){
    var result;
    return function(val){
        switch(val){
            case 'INTERIOR':
                result = "内部"
                break;
            case 'LEASE':
                result = "租赁"
                break;
        }
        return result;
    }
})