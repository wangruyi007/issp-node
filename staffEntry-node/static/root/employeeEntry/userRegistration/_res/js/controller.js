var app = angular.module('userRegistration', [{
    files:[
        "root/employeeEntry/userRegistration/_res/js/service.js"
    ]
}]);
app.controller('userRegistrationCtrl',function ($scope,$state) {
    if ($state.current.url == '/userRegistration') {//默认加载列表
        $state.go('root.employeeEntry.userRegistration.list');
    }
}).controller('userRegistrationMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.employeeEntry.userRegistration.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu';
            $scope.idList = "";//清空选择的 id
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.employeeEntry.userRegistration.edit[12]',{id:$scope.idList});
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
});
