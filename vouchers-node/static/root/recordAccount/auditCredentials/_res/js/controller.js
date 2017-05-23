var app = angular.module('auditCredentials', [{
    files:[
        "root/recordAccount/auditCredentials/_res/js/service.js",
    ]
}]);
app.controller('auditCredentialsCtrl',function ($scope,$state) {
    if ($state.current.url == '/auditCredentials') {//默认加载列表
        $state.go('root.recordAccount.auditCredentials.list')
    }

}).controller('auditCredentialsMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });
    $scope.$on("checkIds", function(event, msg){
       $scope.ids = msg;
    });

    $scope.posting = function(){
        if($scope.ids){
            $state.go('root.recordAccount.auditCredentials.list.posting[12]',{ids:$scope.ids});
            $scope.menuClass = 'postingMenu'
        }
    };

    $scope.anti = function(){
        if($scope.idListd){
            $state.go('root.recordAccount.auditCredentials.list.anti[12]',{id:$scope.idListd});
            $scope.menuClass = 'antiMenu'
        }
    };

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.subjectsSummary = function(){
        $scope.menuClass = 'subjectsSummaryMenu'
    };
    $scope.areasSummary = function(){
        $scope.menuClass = 'areasSummaryMenu'
    };
    $scope.teamSummary = function(){
        $scope.menuClass = 'teamSummaryMenu'
    };
    $scope.projectSummary = function(){
        $scope.menuClass = 'projectSummaryMenu'
    };
});
//自定义过滤器
app.filter('cover',function () {
    return function(val){
        var result;
        switch(val){
            case "NONE":
                result = "未审核";
                break;
            case "CHECK":
                result = "已审核";
                break;
        }
        return result;
    }
});
//自定义过滤器
app.filter('money',function () {
    return function(val){
        var result;
        switch(val){
            case "NONE":
                result = "未过帐";
                break;
            case "CHECK":
                result = "已过帐";
                break;
        }
        return result;
    }
});
//自定义过滤器
app.filter('end',function () {
    return function(val){
        var result;
        switch(val){

            case "NONE":
                result = "未结帐";
                break;
            case "CHECK":
                result = "已结帐";
                break;
        }
        return result;
    }
});