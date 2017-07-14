var app = angular.module('level', [{
    files:[
        "root/customer/level/_res/js/service.js"
    ]
}]);
app.controller('levelCtrl',function ($scope,$state) {

    if ($state.current.url == '/level') {//默认加载列表
        $state.go('root.customer.level.list')
    }

}).controller('levelMenuCtrl',function($scope,$state,$rootScope,$location,levelSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });

    $scope.menuCheck = function (name){
        var buttonName = name;
        $scope.buttonShow = true;
        levelSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 &&response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    // //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
        $scope.idList = id;
    });
    $scope.$on("levelName", function(event, name){
        $scope.name = name;
    });


    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.customer.level.list[12]',{id:$scope.idList,name:'delete'});
            $scope.menuClass = 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.name){
            $state.go('root.customer.level.edit[12]',{nameLevel:$scope.name})
            $scope.menuClass = 'editMenu'
        }
    }
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    }
});

//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "LIST":
                result = "查看或列表";
                break;
            case "ADD":
                result = "添加";
                break;
            case "EDIT":
                result = "编辑";
                break;
            case "DELETE":
                result = "删除";
                break;
        }
        return result;
    }

});


