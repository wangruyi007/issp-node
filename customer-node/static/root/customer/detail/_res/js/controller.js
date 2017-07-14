var app = angular.module('detail', [{
    files:[
        "root/customer/detail/_res/js/service.js"
    ]
}]);
app.controller('detailCtrl',function ($scope,$state) {

    if ($state.current.url == '/detail') {//默认加载列表
        $state.go('root.customer.detail.list[12]')
    }

}).controller('detailMenuCtrl',function($scope,$state,$rootScope,$location,detailSer){

    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
    }
    $scope.menuCheck = function (name){
        var buttonName = name;
        $scope.buttonShow = true;
        detailSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 &&response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };

    //监听到父Ctrl后改变事件
    $scope.$on("getCustomer", function(event, num){
        $scope.customerNum = num;
    });
    $scope.$on("listId", function(event, id){
     $scope.idList = id;
    });

    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.customer.detail.list[12]',{id:$scope.idList,name:'delete'});
            $scope.menuClass = 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.customerNum){
            $state.go('root.customer.detail.edit[12]',{cusNum:$scope.customerNum});
            $scope.menuClass = 'editMenu'
        }
    };

    $scope.toview = function(){
        if($scope.customerNum){
            $state.go('root.customer.detail.toview[12]',{cusNum:$scope.customerNum});
            $scope.menuClass = 'toviewMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    }
    $scope.export = function(){
        $scope.menuClass = 'exportMenu'
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
            case "DELETE":
                result = "删除";
                break;
            case "SEE":
                result="查看详情";
            case "EXPORT":
                result="导出";
        }
        return result;
    }

})


