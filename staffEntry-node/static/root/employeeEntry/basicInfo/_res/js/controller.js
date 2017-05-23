var app = angular.module('basicInfo', [{
    files:[
        "root/employeeEntry/basicInfo/_res/js/service.js"
    ]
}]);
app.controller('basicInfoCtrl',function ($scope,$state) {
    if ($state.current.url == '/basicInfo') {//默认加载列表
        $state.go('root.employeeEntry.basicInfo.list');
    }
}).controller('basicInfoMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.employeeEntry.basicInfo.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu';
            $scope.idList = "";//清空选择的 id
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.employeeEntry.basicInfo.edit[12]',{id:$scope.idList});
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
    //入职情况统计汇总
    $scope.entrySummary = function(){
        $scope.menuClass = 'entrySummaryMenu'
    };
});

//自定义过滤
app.filter('cover',function(){
    return function(val){
        var result;
        switch(val){
            case true:
                result = "有";
                break;
            case false:
                result = "无";
                break;
        }
        return result;
    }
});
