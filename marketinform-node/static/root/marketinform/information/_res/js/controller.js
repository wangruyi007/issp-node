var app = angular.module('information', [{
    files:[
        "root/marketinform/information/_res/js/service.js"
    ]
}]);
app.controller('informationCtrl',function ($scope,$state) {
    if ($state.current.url == '/information') {//默认加载列表
        $state.go('root.marketinform.information.list');
    }
}).controller('informationMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.marketinform.information.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.marketinform.information.edit[12]',{id:$scope.idList});
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
            case "ALEVEL":
                result = "规模枚举";
                break;
            case "BLEVEL":
                result = "B级:31-60人";
                break;
            case "CLEVEL":
                result = "C级:61-90人";
                break;
            case "DLEVEL":
                result = "D级:91-120人";
                break;
            case "ELEVEL":
                result = "E级:121-150人";
                break;
            case "FLEVEL":
                result = "F级:151-180人";
                break;
            case "GLEVEL":
                result = "G级:181-210人";
                break;
            case false:
                result = "否";
                break;
            case true:
                result = "是";
                break;
            case "NEWPROJECT":
                result = "新项目市场信息数量";
                break;
            case "MOBILECOMMUNICATION":
                result = "移动通信行业市场信息数量";
                break;
            case "SOFTWAREDEVELOPMENT":
                result = "软件开发行业市场信息数量";
                break;
            case "INTELLIGENTSYSTEMINTEGRATION":
                result = "智能系统集成行业市场信息数量";
                break;
            case "PLANNINGMARKETINGSOLUTIONS":
                result = "策划与营销方案行业市场信息数量";
                break;
        }
        return result;
    }

})

