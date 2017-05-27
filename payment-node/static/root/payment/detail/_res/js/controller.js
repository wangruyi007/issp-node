var app = angular.module('detail', [{
    files:[
        "root/payment/detail/_res/js/service.js",
    ]
}]);
app.controller('detailCtrl',function ($scope,$state) {
    if ($state.current.url == '/detail') {//默认加载列表
        $state.go('root.payment.detail.list')
    }

}).controller('detailMenuCtrl',function($scope,$state,$rootScope,$location){
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
//查看详细信息
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.payment.detail.list.delete[12]',{id:$scope.idListd});
            $scope.menuClass = 'deleteMenu'
        }
    }
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.payment.detail.edit[12]',{id:$scope.idListd});
            $scope.menuClass = 'editMenu'
        }
    }
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.summary= function(){
        $scope.menuClass = 'summaryMenu'
    };
    $scope.collect = function(){
        $scope.menuClass = 'collectMenu'
    };
    $scope.prosummary= function(){
        $scope.menuClass = 'prosummaryMenu'
    };
    $scope.collectPro = function(){
        $scope.menuClass = 'collectProMenu'
    };
    $scope.genSummary = function(){
        $scope.menuClass = 'genSummaryMenu'
    };
    $scope.general = function(){
        $scope.menuClass = 'generalMenu'
    };
});

//自定义过滤
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val) {
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
            case "0":
                result = "否";
                break;
            case "1":
                result = "是";
                break;
        }
        return result;
    }
});