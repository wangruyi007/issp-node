var app = angular.module('email', [{
    files:[
        "root/marketActivity/email/_res/js/service.js"
    ]
}]);
app.controller('emailCtrl',function ($scope,$state) {
    if ($state.current.url == '/email') {
        $state.go('root.marketActivity.email.list');
    }
}).controller('emailMenuCtrl',function($scope,$state,$rootScope,$location){
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
    $scope.congeal = function(){
        if($scope.idList){
            $state.go('root.marketActivity.email.list.congeal[12]',{id:$scope.idList});
        }
    };

    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.marketActivity.email.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //冻结
     $scope.congeal = function(){
        if($scope.idList){
            $state.go('root.marketActivity.email.list.congeal[12]',{id:$scope.idList});
             $scope.menuClass = 'congealMenu'
        }
    };
    //解冻
     $scope.unfreeze = function(){
        if($scope.idList){
            $state.go('root.marketActivity.email.list.unfreeze[12]',{id:$scope.idList});
             $scope.menuClass = 'unfreezeMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.marketActivity.email.edit[12]',{id:$scope.idList});
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
            case "ONEDAY":
                result = "天";
                break;
            case "ONEWEEK":
                result = "周";
                break;
            case "ONEMONTH":
                result = "月";
                break;
        }
        return result;
    }

})

