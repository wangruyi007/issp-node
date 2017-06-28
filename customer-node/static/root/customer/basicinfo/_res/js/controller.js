var app = angular.module('basicinfo', [{
    files:[
        "root/customer/basicinfo/_res/js/service.js"
    ]
}]);
app.controller('basicinfoCtrl',function ($scope,$state) {

    if ($state.current.url == '/basicinfo') {//默认加载列表
        $state.go('root.customer.basicinfo.list[12]')
    };

}).controller('basicinfoMenuCtrl',function($scope,$state,$rootScope,$location,basicinfoSer){

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
        basicinfoSer.menuPermission(buttonName).then(function(response){

            if(response.data.code == 0 &&response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };

    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, msg){
        $scope.idList = msg;
    });
    $scope.$on("getCustomer", function(event, num){
        $scope.customerNum = num;

    });


    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.customer.basicinfo.list[12]',{id:$scope.idList,name:'delete'});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.congeal = function(){
        if($scope.idList){
            $state.go('root.customer.basicinfo.list[12]',{id:$scope.idList,name:'congeal'});
            $scope.menuClass = 'congealMenu'
        }
    };
    $scope.edit = function(){
        if($scope.customerNum){
            $state.go('root.customer.basicinfo.edit[12]',{cusNum:$scope.customerNum});
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
            case "LIST":
                result = "列表";
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
            case "WOMAN":
                result = "女";
                break;
            case "MAN":
                result = "男";
                break;
            case "VIP":
                result = "VIP";
                break;
            case "OLD":
                result = "老客户";
                break;
            case "COOPERATOR":
                result = "合作伙伴";
                break;
            case "ORDINARY":
                result = "普通客户";
                break;
            case "COMPLETEPROJECT":
                result = "已完成项目客户";
                break;
            case "PROJECTING":
                result = "现项目客户";
                break;
            case "POTENTIAL":
                result = "潜在客户";
                break;
            case "THAW":
                result = "解冻";
                break;
            case "CONGEL":
                result = "冻结";
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
        }
        return result;
    }

})

