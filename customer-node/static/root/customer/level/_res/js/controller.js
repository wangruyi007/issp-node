var app = angular.module('level', [{
    files:[
        "root/customer/level/_res/js/service.js"
    ]
}]);
app.controller('levelCtrl',function ($scope,$state) {

    if ($state.current.url == '/level') {//默认加载列表
        $state.go('root.customer.level.list')
    }

}).controller('levelMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });

    // //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
        $scope.idList = id;
    });
    $scope.$on("levelName", function(event, name){
        $scope.name = name;
    });


    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.customer.level.list.delete[12]',{id:$scope.idList});
        }
    };

    $scope.edit = function(){
        if($scope.name){
            $state.go('root.customer.level.edit[12]',{nameLevel:$scope.name})
        }
    }
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    }
});


