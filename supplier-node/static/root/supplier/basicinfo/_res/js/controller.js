var app = angular.module('basicinfo', [{
    files:[
        "root/supplier/basicinfo/_res/js/service.js",
    ]
}]);
app.controller('basicinfoCtrl',function ($scope,$state) {
    if ($state.current.url == '/basicinfo') {//默认加载列表
        $state.go('root.supplier.basicinfo.list')
    }

}).controller('basicinfoMenuCtrl',function($scope,$state,$rootScope,$location){

    var urlName = $state.current.url.split('/')[1].split('[')[0]
    $scope.menuClass = urlName + "Menu";

    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
       $scope.idListd = id;
    });

    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.list.delete[12]',{id:$scope.idListd});
            $scope.menuClass = 'deleteMenu'
        }
    }

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.edit[12]',{id:$scope.idListd});
            $scope.menuClass = 'editMenu'
        }
    }

    $scope.winning = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.winning',{id:$scope.idListd});
            $scope.menuClass = 'winning?id=Menu'
        }
    };
    $scope.qualification = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.qualification',{id:$scope.idListd});
            $scope.menuClass = 'qualificationMenu'
        }
    };
    $scope.contact = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.contact',{id:$scope.idListd});
            $scope.menuClass = 'contactMenu'
        }
    };
    $scope.cooperation = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.cooperation',{id:$scope.idListd});
            $scope.menuClass = 'cooperationMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.details = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.details[12]',{id:$scope.idListd});
            $scope.menuClass = 'detailsMenu'
        }
    };
    $scope.rewardAdd = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.rewardAdd[12]',{id:$scope.idListd});
            $scope.menuClass = 'rewardAddMenu'
        }
    };
    $scope.qualifiAdd = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.qualifiAdd[12]',{id:$scope.idListd});
            $scope.menuClass = 'qualifiAddMenu'
        }
    };
    $scope.contactAdd = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.contactAdd[12]',{id:$scope.idListd});
            $scope.menuClass = 'contactAddMenu'
        }
    };
    $scope.cooperationAdd = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.cooperationAdd[12]',{id:$scope.idListd});
            $scope.menuClass = 'cooperationAddMenu'
        }
    };
});
