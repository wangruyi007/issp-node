var app = angular.module('summaryProblem', [{
    files:[
        "root/projectProcessed/summaryProblem/_res/js/service.js",
    ]
}]);
app.controller('summaryCtrl',function ($scope,$state) {
    if ($state.current.url == '/summaryProblem') {//默认加载列表
        $state.go('root.projectProcessed.summaryProblem.list')
    }

}).controller('summaryMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };

});

