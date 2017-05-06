var app = angular.module('biddingInformation', [{
    files:[
        "root/biddingManagement/biddingInformation/_res/js/service.js",
    ]
}]);
app.controller('informationCtrl',function ($scope,$state) {
    if ($state.current.url == '/biddingInformation') {//默认加载列表
        $state.go('root.biddingManagement.biddingInformation.list')
    }

}).controller('infoMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.biddingManagement.biddingInformation.list.delete[12]',{id:$scope.idListd});
        }
    }

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.biddingManagement.biddingInformation.edit[12]',{id:$scope.idListd});
            $scope.menuClass = 'editMenu'
        }
    }
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

//自定义过滤
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val){
            case "INVITEDTENDERING":
                result = "邀请招标";
                break;
            case "OPENTENDERING":
                result = "公开招标";
                break;
            case "SOFTWAREDEVELOPMENT":
                result = "软件开发";
                break;
            case "INTELLIGENTSYSTEMINTEGRATION":
                result = "智能系统集成";
                break;
            case "PLANNINGMARKETINGSOLUTIONS":
                result = "策划与营销方案";
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
});
