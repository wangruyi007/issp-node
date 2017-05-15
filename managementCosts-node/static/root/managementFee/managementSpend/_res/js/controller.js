var app = angular.module('managementSpend', [{
    files:[
        "root/managementFee/managementSpend/_res/js/service.js",
    ]
}]);
app.controller('spendCtrl',function ($scope,$state) {
    if ($state.current.url == '/managementSpend') {//默认加载列表
        $state.go('root.managementFee.managementSpend.list')
    }

}).controller('spendMenuCtrl',function($scope,$state,$rootScope,$location){
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

    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.managementFee.managementSpend.list.delete[12]',{id:$scope.idListd});
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.managementFee.managementSpend.edit[12]',{id:$scope.idListd});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.congeal = function(){
        if($scope.idListd){
            $state.go('root.managementFee.managementSpend.list.congeal[12]',{id:$scope.idListd});
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.areasSummary = function(){
        $scope.menuClass = 'areasSummaryMenu'
    };
    $scope.teamSummary = function(){
        $scope.menuClass = 'teamSummaryMenu'
    };
    $scope.categorySummary = function(){
        $scope.menuClass = 'categorySummaryMenu'
    };
    $scope.projectSummary = function(){
        $scope.menuClass = 'projectSummaryMenu'
    };
});
