var app = angular.module('department', [{
    files:[
        "root/organize/management/department/_res/js/service.js"
    ]
}]);
app.controller('departmentCtrl',function($scope){

}).controller('departmentMenuCtrl',function($scope,$state,$rootScope,$location){
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
    $scope.edit = function(){
        if($scope.getId){
            $state.go('root.organize.management.department.edit[12]',{id:$scope.getId});
            $scope.menuClass='editMenu';
        }
    };
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.organize.management.department.list.delete[12]',{id:$scope.getId});
            $scope.menuClass='deleteMenu';
        }
    };
    $scope.congeal = function(){
        if($scope.getId){
            $state.go('root.organize.management.department.list.congeal[12]',{id:$scope.getId});
            $scope.menuClass='congealMenu';
        }
    };
    $scope.jopran = function(){
            $state.go('root.organize.management.department.joprange[12]',{id:$scope.getId});
            $scope.menuClass='joprangeMenu';
    };

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.views = function(){
        if($scope.getId){
            $state.go('root.organize.management.department.views[12]',{id:$scope.getId});
            $scope.menuClass = 'viewsMenu';
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


