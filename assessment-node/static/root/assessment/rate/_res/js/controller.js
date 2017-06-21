var app = angular.module('rate', [{
    files:[
        "root/assessment/rate/_res/js/service.js",
    ]
}]);
app.controller('rateCtrl',function ($scope,$state) {
    if ($state.current.url == '/rate') {//默认加载列表
        $state.go('root.assessment.rate.list')
    }

}).controller('rateMenuCtrl',function($scope,$state,$rootScope,$location,rateSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list' && window.location.href.indexOf('id=') == -1){
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
        rateSer.menuPermission(buttonName).then(function(response){
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
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
});
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val) {
            case "LIST":
                result = "查看或列表";
                break;
         }
        return result;
    }
});