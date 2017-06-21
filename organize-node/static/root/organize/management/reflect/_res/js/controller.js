var app = angular.module('reflect', [{
    files:[
        "root/organize/management/reflect/_res/js/service.js"
    ]
}]);
app.controller('reflectCtrl',function($scope){

}).controller('reflectMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    $scope.$on("passId",function(event,id){
        $scope.getId = id;
    });
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.organize.management.reflect.list.delete[12]',{id:$scope.getId});
            $scope.menuClass='deleteMenu';
        }
    };
    $scope.edit = function(){
        if($scope.getId){
            $state.go('root.organize.management.reflect.edit[12]',{id:$scope.getId});
            $scope.menuClass='editMenu';
        }
    };

    $scope.congeal = function(){
        if($scope.getId){
            $state.go('root.organize.management.reflect.list.congeal[12]',{id:$scope.getId});
            $scope.menuClass='congealMenu';
        }
    };

});

//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
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


