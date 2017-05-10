var app = angular.module('basicinfo', [{
    files:[
        "root/contract/basicinfo/_res/js/service.js"
    ]
}]);
app.controller('basicinfoCtrl',function ($scope,$state) {

    if ($state.current.url == '/basicinfo') {//默认加载列表
        $state.go('root.contract.basicinfo.list')
    };

}).controller('basicinfoMenuCtrl',function($scope,$state,$rootScope,$location){

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
    //编辑
    $scope.edit = function(){
        if($scope.getId){
            $state.go('root.contract.basicinfo.edit[12]',{id:$scope.getId});
            $scope.menuClass='editMenu';
        }
    };
    //删除
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.contract.basicinfo.list.delete[12]',{id:$scope.getId});
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});


