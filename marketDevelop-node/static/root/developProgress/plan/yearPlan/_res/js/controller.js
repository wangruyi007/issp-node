var app = angular.module('yearPlan', [{
    files:[
        "root/developProgress/plan/yearPlan/_res/js/service.js",
    ]
}]);
app.controller('yearPlanCtrl',function ($scope,$state) {
    if ($state.current.url == '/yearPlan') {//默认加载列表
        $state.go('root.developProgress.plan.yearPlan.list')
    }

}).controller('yearPlanMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    console.log(urlName);
    $scope.menuClass = urlName + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
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
            $state.go('root.developProgress.plan.yearPlan.list.delete[12]',{id:$scope.idListd});
        }
    }

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.developProgress.plan.yearPlan.edit[12]',{id:$scope.idListd});
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


