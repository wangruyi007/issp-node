var app = angular.module('outsourcingFee', [{
    files:[
        "root/managementFee/outsourcingFee/_res/js/service.js",
    ]
}]);
app.controller('outsourcingFeeCtrl',function ($scope,$state) {
    if ($state.current.url == '/outsourcingFee') {//默认加载列表
        $state.go('root.managementFee.outsourcingFee.list')
    }

}).controller('outsourcingFeeMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.managementFee.outsourcingFee.list.delete[12]',{id:$scope.idListd});
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.managementFee.outsourcingFee.edit[12]',{id:$scope.idListd});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.congeal = function(){
        if($scope.idListd){
            $state.go('root.managementFee.outsourcingFee.list.congeal[12]',{id:$scope.idListd});
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
