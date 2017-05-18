var app = angular.module('month', [{
    files:[
        "root/budget/month/_res/js/service.js"
    ]
}]);
app.controller('monthCtrl',function ($scope,$state) {
    if ($state.current.url == '/month') {//默认加载列表
        $state.go('root.budget.month.list')
    }
}).controller('monthMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    $scope.$on("passId",function(event,id){
        $scope.getId = id;
    });

    $scope.theMonth = function(){
        if($scope.getId){
            $state.go('root.budget.month.theMonth[12]',{id:$scope.getId});
            $scope.menuClass='theMonthMenu';
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.collect = function(){
        $scope.menuClass = 'collectMenu'
    };
});


