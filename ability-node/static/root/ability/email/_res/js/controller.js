var app = angular.module('email', [{
    files:[
        "root/ability/email/_res/js/service.js"
    ]
}]);
app.controller('emailCtrl',function ($scope,$state) {
    if ($state.current.url == '/email') {
        $state.go('root.ability.email.list');
    }
}).controller('emailMenuCtrl',function($scope,$state,$rootScope,$location){
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
    $scope.congeal = function(){
        if($scope.idList){
            $state.go('root.ability.email.list.congeal[12]',{id:$scope.idList});
        }
    };

    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.ability.email.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        console.log("可以点击");
        if($scope.idList){
            $state.go('root.ability.email.edit[12]',{id:$scope.idList});
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
    $scope.person = function(){
        $scope.menuClass = 'summaryPersonMenu'
    };
    $scope.cooperationone = function(){
        $scope.menuClass = 'summarycooperationMenu'
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
            case "INDEPENDENT":
                result = "独立完成";
                break;
            case "COOPER":
                result = "合作完成";
                break;
            case "STAGEPARTICIPATION":
                result = "阶段参与";
                break;
            case "EVERYDAY":
                result = "每天";
                break;
            case "EVERYWEEK":
                result = "每周";
                break;
            case "EVERYMONTH":
                result = "每月";
                break;
            case "0":
                result = "商业能力展示汇总";
                break;
            case "1":
                result = "个人能力展示汇总";
                break;
            case "2":
                result = "合作对象能力汇总";
                break;
        }
        return result;
    }

})

