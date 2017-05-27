var app = angular.module('interactContact', [{
    files:[
        "root/businessInteraction/interactContact/_res/js/service.js",
    ]
}]);
app.controller('contactCtrl',function ($scope,$state) {
    if ($state.current.url == '/interactContact') {//默认加载列表
        $state.go('root.businessInteraction.interactContact.list')
    }

}).controller('contactMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
            searchShow();
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });

    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.businessInteraction.interactContact.list.delete[12]',{id:$scope.idListd});
        }
    }

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.businessInteraction.interactContact.edit[12]',{id:$scope.idListd});
            $scope.menuClass = 'editMenu'
        }
    }
    $scope.msgList = function(){
        if($scope.idListd){
            $state.go('root.businessInteraction.interactContact.messageList[12]',{id:$scope.idListd});
            $scope.menuClass = 'messageListMenu'
        }
    }
    $scope.msgAdd = function(){
        if($scope.idListd){
            $state.go('root.businessInteraction.interactContact.messageAdd[12]',{id:$scope.idListd});
            $scope.menuClass = 'messageAddMenu'
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
            case "PERSONNERCLASS":
                result = "问题类型枚举";
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
                result = "问题紧急程度枚举";
                break;
            case "INTERMEDIATE":
                result = "中级";
                break;
            case "EMERGENCY":
                result = "紧急";
                break;
        }
        return result;
    }
});
