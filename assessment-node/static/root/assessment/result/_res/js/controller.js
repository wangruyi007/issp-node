var app = angular.module('result', [{
    files:[
        "root/assessment/result/_res/js/service.js"
    ]
}]);
app.controller('resultCtrl',function ($scope,$state) {
    if ($state.current.url == '/result') {
        $state.go('root.assessment.result.list');
    }
}).controller('resultMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
        $scope.idListd = msg;
    });
    $scope.congeal = function(){
        if($scope.idListd){
            $state.go('root.assessment.result.list.congeal[12]',{id:$scope.idListd});
            $scope.menuClass = 'congealMenu'
        }
    };

    //关于删除
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.assessment.result.list.delete[12]',{id:$scope.idListd});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.assessment.result.edit[12]',{id:$scope.idListd});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.summary = function(){
        $scope.menuClass = 'summaryMenu'
    };
});
//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "THAW":
                result = "解冻";
                break;
            case "CONGEAL":
                result = "冻结";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "NOACTIVE":
                result = "未激活";
                break;
            case "UNREVIEW":
                result = "未审核";
                break;
            case "DAY":
                result = "每天";
                break;
            case "WEEK":
                result = "每周";
                break;
            case "MONTH":
                result = "每月";
                break;
            case "MINUTE":
                result = "分";
                break;
            case "HOUR":
                result = "时";
                break;
            case "QUARTER":
                result = "季度";
                break;
            case "YEAR":
                result = "年";
                break;
        }
        return result;
    }

})

