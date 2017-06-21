var app = angular.module('taxesmanage', [{
    files:[
        "root/taxes/taxes/taxesmanage/_res/js/service.js"
    ]
}]);
app.controller('taxesmanageCtrl',function ($scope,$state) {
    if ($state.current.url == '/taxesmanage') {//默认加载列表
        $state.go('root.taxes.taxes.taxesmanage.list');
    }
}).controller('taxesmanageMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.taxes.taxes.taxesmanage.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
            $scope.idList = "";//清空选择的 id
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.taxes.taxes.taxesmanage.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
            $scope.idList = "";//清空选择的 id
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    //添加
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    //查看
    $scope.view = function(){
        $scope.menuClass = 'viewMenu'
    };
    //汇总
    $scope.collect = function(){
        $scope.menuClass = 'collectMenu'
    };
});
app.filter('cover',function(){
    return function(val){
        var result;
        switch(val){
            case 'DIDPAY':
                result = '待缴税';
                break;
            case 'DUTYPAID':
                result = '已缴税';
                break;
        }
        return result;
    }
})