var app = angular.module('coststatus', [{
    files:[
        "root/projectmeasure/manage/coststatus/_res/js/service.js"
    ]
}]);
app.controller('coststatusCtrl',function ($scope,$state) {
    if ($state.current.url == '/coststatus') {//默认加载列表
        $state.go('root.projectmeasure.manage.coststatus.list');
    }
}).controller('coststatusMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.projectmeasure.manage.coststatus.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu';
            $scope.idList = "";
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.projectmeasure.manage.coststatus.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
            $scope.idList = "";
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    //添加市场
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});

//设置自定义过滤器
app.filter('cover',function(){
    var result;
    return function(val){
        switch(val){
            case 'ONE_PAY':
                result = "一次性付清"
                break;
            case 'FRAGMENT_PAY':
                result = "分段付清"
                break;
            case 'CASH':
                result = "现金"
                break;
            case 'BANK_TRANSFER':
                result = "银行兑现"
                break;
             case 'VALUE_ADDED_TAX':
                result = "增值税专用发票"
                break;
            case 'NORMAL':
                result = "普通发票"
                break;
        }
        return result;
    }
})