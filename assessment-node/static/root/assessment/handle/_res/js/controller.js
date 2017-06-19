var app = angular.module('handle', [{
    files:[
        "root/assessment/handle/_res/js/service.js",
    ]
}]);
app.controller('handleCtrl',function ($scope,$state) {
    if ($state.current.url == '/handle') {//默认加载列表
        $state.go('root.assessment.handle.list[12]')
    }
}).controller('handleMenuCtrl',function($scope,$state,$rootScope,$location,handleSer){
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
        handleSer.menuPermission(buttonName).then(function(response){
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
            $state.go('root.assessment.handle.list[12]',{id:$scope.idListd,name:'delete'});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.assessment.handle.edit[12]',{id:$scope.idListd});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.qualitative = function(){
        if($scope.idListd){
            $state.go('root.assessment.handle.qualitative[12]',{id:$scope.idListd});
            $scope.menuClass = 'qualitativeMenu'
        }
    };
    $scope.ration= function(){
        if($scope.idListd){
            $state.go('root.assessment.handle.ration[12]',{id:$scope.idListd});
            $scope.menuClass = 'rationMenu'
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
            case "QUALITATIVE":
                result = "定性指标";
                break;
            case "QUANTIFY":
                result = "定量指标";
                break;
            case "LESSFOUR":
                result = "4小时内";
                break;
            case "FORTOTWENTYFOR":
                result = "4至24小时";
                break;
            case "MORETWENTYFOR":
                result = "24小时以上";
                break;
            case "ONE":
                result = "一个部门";
                break;
            case "TWOORTHREE":
                result = "邮箱";
                break;
            case "WRITTEN":
                result = "二至三个部门";
                break;
            case "MORETHREE":
                result = "三个部门以上";
                break;
            case "PRIMARY":
                result = "初级";
                break;
            case "MIDDLE":
                result = "中级";
                break;
            case "URGENCY":
                result = "紧急";
                break;
            case "YES":
                result = "是";
                break;
            case "NOT":
                result = "否";
                break;
            case "DATUMRENEGE":
                result = "资料违约";
                break;
            case "PROJECTQUALITY":
                result = "工程质量违检违约";
                break;
            case "MANRENEGE":
                result = "人员违约";
                break;
            case "ANOTHER":
                result = "其他";
                break;
            case "GENERA":
                result = "一般";
                break;
            case "SEVERITY":
                result = "严重";
                break;
            case "ONLYONE":
                result = "仅允出现一次";
                break;
            case "FORBID":
            result = "禁止";
            break;


        }
        return result;
    }
});
