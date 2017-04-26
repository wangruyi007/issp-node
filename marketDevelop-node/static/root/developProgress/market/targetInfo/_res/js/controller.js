var app = angular.module('targetInfo', [{
    files:[
        "root/developProgress/market/targetInfo/_res/js/service.js",
    ]
}]);
app.controller('targetInfoCtrl',function ($scope,$state) {
    if ($state.current.url == '/targetInfo') {//默认加载列表
        $state.go('root.developProgress.market.targetInfo.list')
    }

}).controller('targetInfoMenuCtrl',function($scope,$rootScope,$location,$state){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName + "Menu";
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });

    $scope.delete = function(){
        console.log($scope.idListd);
        if($scope.idListd){
            $state.go('root.developProgress.market.targetInfo.list.delete[12]',{id:$scope.idListd});
        }
    }

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.developProgress.market.targetInfo.edit[12]',{id:$scope.idListd});
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


