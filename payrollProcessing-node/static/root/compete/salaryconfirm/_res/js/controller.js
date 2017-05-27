var app = angular.module('salaryconfirm', [{
    files:[
        "root/compete/salaryconfirm/_res/js/service.js"
    ]
}]);
app.controller('salaryconfirmCtrl',function ($scope,$state) {
    if ($state.current.url == '/salaryconfirm') {
        $state.go('root.compete.salaryconfirm.list');
    }
}).controller('salaryconfirmMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.compete.salaryconfirm.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.compete.salaryconfirm.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    };
    //导入
    // $scope.import = function(){
    //     if($scope.idList){
    //         $state.go('root.compete.salaryconfirm.import[12]',{id:$scope.idList});
    //         $scope.menuClass = 'importMenu'
    //     }
    // };
    //导出
    // $scope.export = function(){
    //     if($scope.idList){
    //         $state.go('root.compete.salaryconfirm.export[12]',{id:$scope.idList});
    //         $scope.menuClass = 'exportMenu'
    //     }
    // };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});
