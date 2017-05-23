var app = angular.module('entryRegister', [{
    files:[
        "root/employeeEntry/entryRegister/_res/js/service.js"
    ]
}]);
app.controller('entryRegisterCtrl',function ($scope,$state) {
    if ($state.current.url == '/entryRegister') {//默认加载列表
        $state.go('root.employeeEntry.entryRegister.list');
    }
}).controller('entryRegisterMenuCtrl',function($scope,$state,$rootScope,$location){
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
    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.employeeEntry.entryRegister.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
            $scope.idList = "";//清空选择的 id
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.employeeEntry.entryRegister.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
            $scope.idList = "";//清空选择的 id
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = "";
    };
    //添加
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idList = "";
    };
    //审核详情
    $scope.auditDetail = function(){
        if($scope.idList){
            $state.go('root.employeeEntry.entryRegister.auditDetail[12]',{id:$scope.idList});
            $scope.menuClass = 'auditDetailMenu'
            $scope.idList = "";//清空选择的 id
        }
    };
});