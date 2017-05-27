var app = angular.module('problemAccepted', [{
    files:[
        "root/projectProcessed/problemAccepted/_res/js/service.js",
    ]
}]);
app.controller('problemCtrl',function ($scope,$state) {
    if ($state.current.url == '/problemAccepted') {//默认加载列表
        $state.go('root.projectProcessed.problemAccepted.list')
    }

}).controller('problemMenuCtrl',function($scope,$state,$rootScope,$location){
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

    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.projectProcessed.problemAccepted.list.delete[12]',{id:$scope.idListd});
        }
    }

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.projectProcessed.problemAccepted.edit[12]',{id:$scope.idListd});
            $scope.menuClass = 'editMenu'
        }
    }
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});

//自定义过滤
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val){
            case "SYSTEM":
                result = "系统";
                break;
            case "WRITTEN":
                result = "书面";
                break;
            case "MAIL":
                result = "邮件";
                break;
            case "ORAL":
                result = "口头";
                break;
            case "PERSONNERCLASS":
                result = "人员类";
                break;
            case "PROGRESSCLASS":
                result = "进度类";
                break;
            case "DELIVERCLASS":
                result = "交付类";
                break;
            case "DEVICECLASS":
                result = "设备类";
                break;
            case "PRIMARY":
                result = "初级";
                break;
            case "INTERMEDIATE":
                result = "中级";
                break;
            case "EMERGENCY":
                result = "紧急";
                break;
            case "FOURHOURS":
                result = "4小时之内";
                break;
            case "FOURTOTWENTYFOURHOURS":
                result = "4-24小时之内";
                break;
            case "TWENTYFOURHOURS":
                result = "24小时以上";
                break;
            case "ONEDEPARTMENT":
                result = "影响1个部门";
                break;
            case "TWOTOTHREEDEPARTMENT":
                result = "影响2-3个部门";
                break;
            case "THREEDEPARTMENT":
                result = "影响3个部门以上";
                break;
        }
        return result;
    }
});
