var app = angular.module('confirmed', [{
    files:[
        "root/compete/confirmed/_res/js/service.js"
    ]
}]);
app.controller('confirmedCtrl',function ($scope,$state) {
    if ($state.current.url == '/confirmed') {
        $state.go('root.compete.confirmed.list');
    }
}).controller('confirmedMenuCtrl',function($scope,$state,$rootScope,$location){
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
    //编辑
    $scope.first = function(){
        if($scope.idList){
            $state.go('root.compete.confirmed.list.first[12]',{id:$scope.idList});
            $scope.menuClass = 'firstMenu'
        }
    };
    $scope.second = function(){
        if($scope.idList){
            $state.go('root.compete.confirmed.list.second[12]',{id:$scope.idList});
            $scope.menuClass = 'secondMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
});
