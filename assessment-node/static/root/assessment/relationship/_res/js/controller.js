var app = angular.module('relationship', [{
    files:[
        "root/assessment/relationship/_res/js/service.js",
    ]
}]);
app.controller('relationshipCtrl',function ($scope,$state) {
    if ($state.current.url == '/relationship') {//默认加载列表
        $state.go('root.assessment.relationship.list')
    }

}).controller('relationshipMenuCtrl',function($scope,$state,$rootScope,$location,relationshipSer){
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
        relationshipSer.menuPermission(buttonName).then(function(response){
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
            case "EMAIL":
                result = "邮箱";
                break;
            case "WRITTEN":
                result = "书面";
                break;
            case "VERBAL":
                result = "口头";
                break;
            case "SYSTEM":
                result = "系统";
                break;
             }
        return result;
    }
});