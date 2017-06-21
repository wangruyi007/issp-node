var app = angular.module('jopdes',[{
    files:[
        "root/organize/management/jopdes/_res/js/service.js"
    ]
}]);
app.controller('jopdesCtrl',function($scope,$state){

    if ($state.current.url == '/jopdes') {//默认加载列表
        $state.go('root.organize.management.jopdes.list')
    };
}).controller('jopdesMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    $scope.$on("passId",function(event,id){
        $scope.getId = id;
    });
    $scope.$on("passPositionId",function(event,id){
        $scope.getPositionId = id;
    });
    $scope.edit = function(){
        if($scope.getId){
            $state.go('root.organize.management.jopdes.edit[12]',{id:$scope.getId});
            $scope.menuClass='editMenu';
        }
    };
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.organize.management.jopdes.list.delete[12]',{id:$scope.getId});
            $scope.menuClass='deleteMenu';
        }
    };
    $scope.view = function(){
        if($scope.getPositionId){
            $state.go('root.organize.management.jopdes.view[12]', {id : $scope.getPositionId});
            $scope.menuClass = 'viewMenu';
        }
    };

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});


