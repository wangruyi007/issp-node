var app = angular.module('directionSubjects', [{
    files:[
        "root/developProgress/other/directionSubjects/_res/js/service.js",
    ]
}]);
app.controller('directionCtrl',function ($scope,$state) {
    if ($state.current.url == '/directionSubjects') {//默认加载列表
        $state.go('root.developProgress.other.directionSubjects.list[12]')
    }

}).controller('directionMenuCtrl',function($scope,$state,$rootScope,$location,directionSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        directionSer.menuPermission(buttonName).then(function(response){
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
            $state.go('root.developProgress.other.directionSubjects.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //冻结
    $scope.congeal = function(){
        if($scope.idListd){
            $state.go('root.developProgress.other.directionSubjects.list[12]',{id:$scope.idListd,name:'congeal',page:$scope.page});
            $scope.menuClass = 'congealMenu'
        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.developProgress.other.directionSubjects.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
});


