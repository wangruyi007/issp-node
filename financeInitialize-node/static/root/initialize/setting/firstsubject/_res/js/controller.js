var app = angular.module('firstsubject', [{
    files:[
        "root/initialize/setting/firstsubject/_res/js/service.js"
    ]
}]);
app.controller('firstsubjectCtrl',function ($scope,$state) {
    if ($state.current.url == '/firstsubject') {//默认加载列表
        $state.go('root.initialize.setting.firstsubject.list');
    }
}).controller('firstsubjectMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.initialize.setting.firstsubject.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
            $scope.idList = "";//清空选择的 id
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.initialize.setting.firstsubject.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
            $scope.idList = "";//清空选择的 id
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
            case 'LONG_TEAM_COOPERATION':
                result = "长期合作"
                break;
            case 'MATTER_COOPERATION':
                result = "事项合作"
                break;
            case 'INTERMEDIARY':
                result = "中介"
                break;
        }
        return result;
    }
})
