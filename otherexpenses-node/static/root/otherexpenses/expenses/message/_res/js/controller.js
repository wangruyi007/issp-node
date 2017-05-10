var app = angular.module('message', [{
    files:[
        "root/otherexpenses/expenses/message/_res/js/service.js"
    ]
}]);
app.controller('messageCtrl',function ($scope,$state) {
    if ($state.current.url == '/message') {//默认加载列表
        $state.go('root.otherexpenses.expenses.message.list');
    }
}).controller('messageMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.otherexpenses.expenses.message.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
            $scope.idList = "";//清空选择的 id
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.otherexpenses.expenses.message.edit[12]',{id:$scope.idList});
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
    //地区汇总 
    $scope.area = function(){
        $scope.menuClass = 'areaMenu'
    };
    //项目组汇总
    $scope.projectGroup = function(){
        $scope.menuClass = 'projectGroupMenu'
    };
    //项目类型汇总
    $scope.projectType = function(){
        $scope.menuClass = 'projectTypeMenu'
    };
    //项目名称汇总
    $scope.projectName = function(){
        $scope.menuClass = 'projectNameMenu'
    };

});
