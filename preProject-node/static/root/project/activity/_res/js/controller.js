var app = angular.module('activity', [{
    files:[
        "root/project/activity/_res/js/service.js"
    ]
}]);
app.controller('activityCtrl',function ($scope,$state) {

    if ($state.current.url == '/activity') {//默认加载列表
        $state.go('root.project.activity.list')
    }

}).controller('activityMenuCtrl',function($scope,$state,$rootScope,$location){
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
     $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.firstSummary = function(){
        $scope.menuClass = 'firstSummaryMenu'
    };
    $scope.secondSummary = function(){
        $scope.menuClass = 'secondSummaryMenu'
    };
    $scope.thirdSummary = function(){
        $scope.menuClass = 'thirdSummaryMenu'
    };
    $scope.areasSummary = function(){
        $scope.menuClass = 'areasSummaryMenu'
    };
    $scope.projectSummary = function(){
        $scope.menuClass = 'projectSummaryMenu'
    };
    $scope.projectNameSummary = function(){
        $scope.menuClass = 'projectNameSummaryMenu'
    };
    //查看详细信息
    $scope.$on("socialListId", function(event, suId){
        $scope.idSocialList = suId;
    });
    $scope.firstDetails = function(){
        if($scope.idSocialList){
            $state.go('root.project.activity.firstDetails[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'firstDetailsMenu'
        }
    };
    $scope.secondDetails = function(){
        if($scope.idSocialList){
            $state.go('root.project.activity.secondDetails[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'secondDetailsMenu'
        }
    };
    $scope.thirdDetails = function(){
        if($scope.idSocialList){
            $state.go('root.project.activity.thirdDetails[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'thirdDetailsMenu'
        }
    };
    $scope.areasDetails = function(){
        if($scope.idSocialList){
            $state.go('root.project.activity.areasDetails[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'areasDetailsMenu'
        }
    };
    $scope.projectDetails = function(){
        if($scope.idSocialList){
            $state.go('root.project.activity.projectDetails[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'projectDetailsMenu'
        }
    };
    $scope.projectNameDetails = function(){
        if($scope.idSocialList){
            $state.go('root.project.activity.projectNameDetails[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'projectNameDetailsMenu'
        }
    };
});


