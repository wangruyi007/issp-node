var app = angular.module('weekPlan', [{
    files:[
        "root/developProgress/plan/weekPlan/_res/js/service.js",
    ]
}]);
app.controller('weekPlanCtrl',function ($scope,$state) {
    if ($state.current.url == '/weekPlan') {//默认加载列表
        $state.go('root.developProgress.plan.weekPlan.list[12]')
    }

}).controller('weekPlanMenuCtrl',function($scope,$state,$rootScope,$location,weekPlanSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        $scope.menuClass = $location.search().name + 'Menu';
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        weekPlanSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.developProgress.plan.weekPlan.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.developProgress.plan.weekPlan.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.upload = function(){
        if($scope.idListd){
            $state.go('root.developProgress.plan.weekPlan.upload[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'uploadMenu'
        }
    };
    $scope.view = function(){
        if($scope.idListd){
            $state.go('root.developProgress.plan.weekPlan.view[12]',{id:$scope.idListd,view:1,page:$scope.page});
            $scope.menuClass = 'viewMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    $scope.export = function(){
        $scope.menuClass = 'exportMenu';
        $scope.idListd = ''
    };
});


