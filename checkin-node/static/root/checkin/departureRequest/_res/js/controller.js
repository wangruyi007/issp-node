var app = angular.module('departureRequestM', [{
    files:[
        "root/checkin/departureRequest/_res/js/service.js",
    ]
}]);
app.controller('departureCtrl',function ($scope,$state) {
    if ($state.current.url == '/departureRequest') {//默认加载列表
        $state.go('root.checkin.departureRequest.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('departureMenuCtrl',function($scope,$state,$rootScope,$location,departureSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    //功能权限
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        departureSer.menuPermission(buttonName).then(function(response){
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
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.checkin.departureRequest.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.audit = function(){
        if($scope.idListd){
            $state.go('root.checkin.departureRequest.audit[12]',{id:$scope.idListd});
            $scope.menuClass = 'auditMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idListd = ''
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.checkin.departureRequest.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu';
        }
    };
});
app.filter('cover',function () {
   return function (val) {
       var result;
       switch (val){
           case true:
               result = '是';
                break;
           case false:
               result = '否';
               break;
           case 'PASS':
               result = '通过';
               break;
           case 'NOTPASS':
               result = '不通过';
               break;
       }
       return result;
   }
});
