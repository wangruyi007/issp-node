var app = angular.module('grow', [{
    files:[
        "root/assessment/grow/_res/js/service.js",
    ]
}]);
app.controller('growCtrl',function ($scope,$state) {
    if ($state.current.url == '/grow') {//默认加载列表
        $state.go('root.assessment.grow.list')
    }

}).controller('growMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.assessment.grow.list.delete[12]',{id:$scope.idListd});
            $scope.menuClass = 'deleteMenu'
        }
    }
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.assessment.grow.edit[12]',{id:$scope.idListd});
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
        switch(val) {
            case "COST":
                result = "成本";
                break;
            case "FEE":
                result = "事项合作";
                break;
            case "G":
                result = "中介合作";
                break;
        }
        return result;
    }
});
