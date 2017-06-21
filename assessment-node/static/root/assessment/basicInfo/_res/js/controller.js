var app = angular.module('basicInfo', [{
    files:[
        "root/assessment/basicInfo/_res/js/service.js",
    ]
}]);
app.controller('basicInfoCtrl',function ($scope,$state) {
    if ($state.current.url == '/basicInfo') {//默认加载列表
        $state.go('root.assessment.basicInfo.list[12]')
    }

}).controller('basicInfoMenuCtrl',function($scope,$state,$rootScope,$location,basicInfoSer){
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
    //菜单权限
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
          basicInfoSer.menuPermission(buttonName).then(function(response){
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
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.assessment.basicInfo.list[12]',{id:$scope.idListd,name:'delete'});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.assessment.basicInfo.edit[12]',{id:$scope.idListd});
            $scope.menuClass = 'editMenu'
        }
    }
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});

//自定义过滤
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val) {
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
            case "LONGTERM":
                result = "长期合作";
                break;
            case "ITEM":
                result = "事项合作";
                break;
            case "AGENCY":
                result = "中介合作";
                break;
            case "ANOTHER":
                result = "其他";
                break;
        }
        return result;
    }
});
