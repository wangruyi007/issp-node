var app = angular.module('courseCollect', [{
    files:[
        "root/compete/courseCollect/_res/js/service.js"
    ]
}]);
app.controller('courseCollectCtrl',function ($scope,$state) {
    if ($state.current.url == '/courseCollect') {
        $state.go('root.compete.courseCollect.list');
    }
}).controller('courseCollectMenuCtrl',function($scope,$state,$rootScope,$location){
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

    $scope.$on("onSearch", function(event, name){
        $scope.onSearch = name;
    });
    

    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.compete.courseCollect.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.compete.courseCollect.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.export = function(){
        if($scope.idList){
            $state.go('root.compete.courseCollect.export[12]',{id:$scope.idList});
            $scope.menuClass = 'exportMenu'
        }
    };
    $scope.subjectsSummary = function(){
        $scope.menuClass = 'subjectsSummaryMenu'
    };
    $scope.areasSummary = function(){
        $scope.menuClass = 'areasSummaryMenu'
    };
    $scope.teamSummary = function(){
        $scope.menuClass = 'teamSummaryMenu'
    };
    $scope.projectSummary = function(){
        $scope.menuClass = 'projectSummaryMenu'
    };
    $scope.contrast = function(){
        $scope.menuClass = 'contrastMenu'
    };
});
