var app = angular.module('profit', [{
    files:[
        "root/assessment/profit/_res/js/service.js",
    ]
}]);
app.controller('profitCtrl',function ($scope,$state) {
    if ($state.current.url == '/profit') {//默认加载列表
        $state.go('root.assessment.profit.list')
    }

}).controller('profitMenuCtrl',function($scope,$state,$rootScope,$location){
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
