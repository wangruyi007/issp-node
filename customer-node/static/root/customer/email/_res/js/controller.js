var app = angular.module('level', [{
    files:[
        "root/customer/email/_res/js/service.js"
    ]
}]);
app.controller('emailCtrl',function ($scope,$state) {


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
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.customer.email.list.delete[12]',{id:$scope.idList});
        }
    };

    $scope.congeal = function(){
        if($scope.idList){
            $state.go('root.customer.email.list.congeal[12]',{id:$scope.idList});
        }
    };

    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.customer.email.edit[12]',{id:$scope.idList})
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
            case "MINUTE":
                result = "分钟";
                break;
            case "HOURS":
                result = "小时";
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
            case "QUARTER":
                result = "季度";
                break;
            case "YEAR":
                result = "年";
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
        }
        return result;
    }

})


