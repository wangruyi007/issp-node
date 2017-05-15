var app = angular.module('relationship', [{
    files:[
        "root/assessment/relationship/_res/js/service.js",
    ]
}]);
app.controller('relationshipCtrl',function ($scope,$state) {
    if ($state.current.url == '/relationship') {//默认加载列表
        $state.go('root.assessment.relationship.list')
    }

}).controller('relationshipMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
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