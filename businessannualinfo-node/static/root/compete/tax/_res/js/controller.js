var app = angular.module('tax', [{
    files:[
        "root/compete/tax/_res/js/service.js"
    ]
}]);
app.controller('taxCtrl',function ($scope,$state) {
    if ($state.current.url == '/tax') {
        $state.go('root.compete.tax.list');
    }
}).controller('taxMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.compete.tax.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.compete.tax.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});
//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "NAME":
                result = "公司名字";
                break;
            case "DATE":
                result = "时间";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "MONEY":
                result = "资产";
                break;
        }
        return result;
    }

})

