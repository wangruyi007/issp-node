var app = angular.module('businessType', [{
    files:[
        "root/developProgress/other/businessType/_res/js/service.js",
    ]
}]);
app.controller('typeCtrl',function ($scope,$state) {
    if ($state.current.url == '/businessType') {//默认加载列表
        $state.go('root.developProgress.other.businessType.list')
    }

}).controller('typeMenuCtrl',function($scope,$state,$rootScope,$location){
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
        console.log($scope.idListd);
        if($scope.idListd){
            $state.go('root.developProgress.other.businessType.list.delete[12]',{id:$scope.idListd});
        }
    }
    //冻结
    $scope.congeal = function(){
        if($scope.idListd){
            $state.go('root.developProgress.other.businessType.list.congeal[12]',{id:$scope.idListd});
        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.developProgress.other.businessType.edit[12]',{id:$scope.idListd});
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
