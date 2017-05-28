var app = angular.module('waitconfirm', [{
    files:[
        "root/compete/waitconfirm/_res/js/service.js"
    ]
}]);
app.controller('waitconfirmCtrl',function ($scope,$state) {
    if ($state.current.url == '/waitconfirm') {
        $state.go('root.compete.waitconfirm.list');
    }
}).controller('waitconfirmMenuCtrl',function($scope,$state,$rootScope,$location){
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

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.notarize = function(){
        if($scope.idList){
            $state.go('root.compete.waitconfirm.list.notarize[12]',{id:$scope.idList});
            $scope.menuClass = 'notarizeMenu'
        }
    };
});
