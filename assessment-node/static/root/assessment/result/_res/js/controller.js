var app = angular.module('result', [{
    files:[
        "root/assessment/result/_res/js/service.js"
    ]
}]);
app.controller('resultCtrl',function ($scope,$state) {
    if ($state.current.url == '/result') {
        $state.go('root.assessment.result.list[12]');
    }
}).controller('resultMenuCtrl',function($scope,$state,$rootScope,$location,resultSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
    }
    //菜单权限
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        resultSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
        $scope.idListd = msg;
    });
    $scope.congeal = function(){
        if($scope.idListd){
            $state.go('root.assessment.result.list[12]',{id:$scope.idListd,name:'congeal'});
            $scope.menuClass = 'congealMenu'
        }
    };
    //关于删除
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.assessment.result.list[12]',{id:$scope.idListd,name:'delete'});
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
            case "LIST":
                result = "查看或列表";
                break;
            case "ADD":
                result = "添加";
                break;
            case "EDIT":
                result = "编辑";
                break;
            case "THAW":
                result = "解冻";
                break;
            case "CONGEAL":
                result = "冻结";
                break;
            case "COLLECT":
                result = "汇总";
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
                result = "天";
                break;
            case "WEEK":
                result = "周";
                break;
            case "MONTH":
                result = "月";
                break;
            case "MINUTE":
                result = "分钟";
                break;
            case "HOUR":
                result = "小时";
                break;
            case "QUARTER":
                result = "季";
                break;
            case "YEAR":
                result = "年";
                break;
        }
        return result;
    }
});

