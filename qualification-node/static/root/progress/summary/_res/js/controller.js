var app = angular.module('summary', [{
    files : [
        "root/progress/summary/_res/js/service.js"
    ]
}]);
app.controller('summaryCtrl', function($scope, $state){

    if($state.current.url == '/summary'){//默认加载列表
        $state.go('root.progress.summary.list')
    }
    ;

}).controller('summaryMenuCtrl', function($scope, $state, $rootScope, $location){

    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName + "Menu";
    $rootScope.$on('$locationChangeSuccess', function(){//url地扯改变或者刷新
        if($location.path().split('/').slice(-1) == 'list'){
            $scope.menuClass = 'listMenu';
        }
    });
    $scope.$on("passId", function(event, id){
        $scope.getId = id;
    });
    $scope.edit = function(){
        if($scope.getId){
            $state.go('root.progress.summary.edit[12]', {id : $scope.getId});
            $scope.menuClass = 'editMenu';
        }
    };
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.progress.summary.list.delete[12]', {id : $scope.getId});
            $scope.menuClass = 'deleteMenu';
        }
    }
    $scope.add = function(){
            $scope.menuClass = 'addMenu';
    }
});

//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "NONE":
                result = "未办理";
                break;
            case "SUCCESS":
                result = "办理成功";
                break;
            case "FAIL":
                result = "办理失败";
                break;
        }
        return result;
    }
})

