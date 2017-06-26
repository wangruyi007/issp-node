var app = angular.module('contractType', [{
    files:[
        "root/businessContract/contractType/_res/js/service.js",
    ]
}]);
app.controller('contractTypeCtrl',function ($scope,$state) {
    if ($state.current.url == '/contractType') {//默认加载列表
        $state.go('root.businessContract.contractType.list[12]')
    }
    $scope.$emit('isVi',false);//判断是否出现搜索按钮
}).controller('contractTypeMenuCtrl',function($scope,$state,$rootScope,$location,contractSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        $scope.menuClass = $location.search().name + 'Menu';
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        contractSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.businessContract.contractType.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.businessContract.contractType.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.upload = function(){
        if($scope.idListd){
            $state.go('root.businessContract.contractType.upload[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'uploadMenu'
        }
    };
    $scope.view = function(){
        if($scope.idListd){
            $state.go('root.businessContract.contractType.view[12]',{id:$scope.idListd,view:1,page:$scope.page});
            $scope.menuClass = 'viewMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };

});
//自定义过滤器
app.filter('cover',function(){
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
            case "AUDIT":
                result = "审核";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "CONGEL":
                result = "冻结";
                break;
            case "THAW":
                result = "解冻";
                break;
            case "COLLECT":
                result = "汇总";
                break;
            case "UPLOAD":
                result = "上传附件";
                break;
            case "DOWNLOAD":
                result = "下载附件";
                break;
            case "IMPORT":
                result = "导入";
                break;
            case "EXPORT":
                result = "导出";
                break;
            case "SEE":
                result = "查看";
                break;
            case "SEEFILE":
                result = "查看附件";
                break;
        }
        return result;
    }

});