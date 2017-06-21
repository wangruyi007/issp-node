var app = angular.module('frontline', [{
    files:[
        "root/assessment/frontline/_res/js/service.js",
    ]
}]);
app.controller('frontlineCtrl',function ($scope,$state) {
    if ($state.current.url == '/frontline') {//默认加载列表
        $state.go('root.assessment.frontline.list[12]')
    }
}).controller('frontlineMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
    }
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });

    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.assessment.frontline.list[12]',{id:$scope.idListd,name:'delete'});
            $scope.menuClass = 'deleteMenu';
        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.assessment.frontline.edit[12]',{id:$scope.idListd});
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

//自定义过滤
