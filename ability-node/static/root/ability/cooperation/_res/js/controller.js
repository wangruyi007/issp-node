var app = angular.module('cooperation', [{
    files:[
        "root/ability/cooperation/_res/js/service.js"
    ]
}]);
app.controller('cooperationCtrl',function ($scope,$state) {
    if ($state.current.url == '/cooperation') {
        $state.go('root.ability.cooperation.list');
    }
}).controller('cooperationMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.ability.cooperation.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.pedit = function(){
        if($scope.idList){
            $state.go('root.ability.cooperation.pedit[12]',{id:$scope.idList});
            $scope.menuClass = 'peditMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        console.log("可以点击");
        if($scope.idList){
            $state.go('root.ability.cooperation.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.perlist = function(){
        if($scope.idList){
            $state.go('root.ability.cooperation.perlist[12]',{id:$scope.idList});
            $scope.menuClass = 'perlistMenu'
       }
    };
});
//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "INDEPENDENT":
                result = "独立完成";
                break;
            case "COOPER":
                result = "合作完成";
                break;
            case "STAGEPARTICIPATION":
                result = "阶段参与";
                break;
        }
        return result;
    }

})

