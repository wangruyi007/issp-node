var app = angular.module('projectacceptance', [{
    files:[
        "root/project/projectacceptance/_res/js/service.js"
    ]
}]);
app.controller('projectacceptanceCtrl',function ($scope,$state) {
    if ($state.current.url == '/projectacceptance') {//默认加载列表
        $state.go('root.project.projectacceptance.list');
    }
}).controller('projectacceptanceMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
            searchHide();
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
        $scope.idList = id;
    });
    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.project.projectacceptance.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.project.projectacceptance.edit[12]',{id:$scope.idList});
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
//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "WOMAN":
                result = "女";
                break;
        }
        return result;
    }

})

