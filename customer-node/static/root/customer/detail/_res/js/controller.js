var app = angular.module('detail', [{
    files:[
        "root/customer/detail/_res/js/service.js"
    ]
}]);
app.controller('detailCtrl',function ($scope,$state) {

    if ($state.current.url == '/detail') {//默认加载列表
        $state.go('root.customer.detail.list')
    }

}).controller('detailMenuCtrl',function($scope,$state){

    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";


    // //监听到父Ctrl后改变事件
    $scope.$on("getCustomer", function(event, num){
        $scope.customerNum = num;
    });
 $scope.$on("listId", function(event, id){
     $scope.idList = id;
    });

    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.customer.detail.list.delete[12]',{id:$scope.idList});
        }
    }

    $scope.edit = function(){
        if($scope.customerNum){
            $state.go('root.customer.detail.edit[12]',{cusNum:$scope.customerNum});
            $scope.menuClass = 'editMenu'
        }
    }

    $scope.toview = function(){
        if($scope.customerNum){
            $state.go('root.customer.detail.toview[12]',{cusNum:$scope.customerNum});
            $scope.menuClass = 'toviewMenu'
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
            case "CONGEAL":
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


