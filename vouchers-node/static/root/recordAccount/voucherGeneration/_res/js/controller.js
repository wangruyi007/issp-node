var app = angular.module('voucherGeneration', [{
    files:[
        "root/recordAccount/voucherGeneration/_res/js/service.js",
    ]
}]);
app.controller('voucherGenerationCtrl',function ($scope,$state) {
    if ($state.current.url == '/voucherGeneration') {//默认加载列表
        $state.go('root.recordAccount.voucherGeneration.list')
    }

}).controller('voucherMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.recordAccount.voucherGeneration.list.delete[12]',{id:$scope.idListd});
            $scope.menuClass= 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.recordAccount.voucherGeneration.edit[12]',{id:$scope.idListd});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
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