var app = angular.module('competitor', [{
    files:[
        "root/compete/competitor/_res/js/service.js"
    ]
}]);
app.controller('competitorCtrl',function ($scope,$state) {
    if ($state.current.url == '/competitor') {//默认加载列表
        $state.go('root.compete.competitor.list');
        console.log("需要加载列表咯")
    }
}).controller('competitorMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.compete.competitor.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
//关于搜索
/*    $scope.search = function(){
        $state.go('root.ability.companycap.list.search[12]');
        console.log("搜索可以单击")
    };*/
    //编辑
    $scope.edit = function(){
        console.log("可以点击");
        if($scope.idList){
            $state.go('root.compete.competitor.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    //组织
    $scope.organize = function(){
        // if($scope.idList){
            $state.go('root.compete.competitor.organize[12]',{id:$scope.idList});
            $scope.menuClass = 'organizeMenu'
        // }
    }
});
//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "WOMAN":
                result = "女";
                break;
            case "MAN":
                result = "男";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "NOACTIVE":
                result = "未激活";
                break;
            case "UNREVIEW":
                result = "未审核";
                break;
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

