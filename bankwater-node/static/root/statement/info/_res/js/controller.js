var app = angular.module('info', [{
    files:[
        "root/statement/info/_res/js/service.js"
    ]
}]);
app.controller('infoCtrl',function ($scope,$state) {

    if ($state.current.url == '/info') {//默认加载列表
        $state.go('root.statement.info.list')
    }

}).controller('infoMenuCtrl',function($scope,$state,$rootScope,$location){

    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    $scope.$on("passId",function(event,id){
        $scope.hasId=id;
    });

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.edit=function(){
        if($scope.hasId){
            $state.go("root.statement.info.edit[12]",{id:$scope.hasId});
            $scope.menuClass = 'editMenu'
        }
    }
    $scope.delete=function(){
        if($scope.hasId){
            $state.go("root.statement.info.list.delete[12]",{id:$scope.hasId});
            $scope.menuClass = 'deleteMenu'
        }
    }
    
});

//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "MAIN":
                result = "主营业务成本";
                break;
            case "MARKET":
                result = "市场费";
                break;
            case "TRAINING":
                result = "培训费";
                break;
        }
        return result;
    }
});

