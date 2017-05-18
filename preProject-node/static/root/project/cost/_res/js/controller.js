var app = angular.module('cost', [{
    files:[
        "root/project/cost/_res/js/service.js"
    ]
}]);
app.controller('costCtrl',function ($scope,$state) {

    if ($state.current.url == '/cost') {//默认加载列表
        $state.go('root.project.cost.list')
    }

}).controller('costMenuCtrl',function($scope,$state,$rootScope,$location){
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
    //编辑
    $scope.edit = function(){
        if($scope.getId){
            $state.go('root.project.cost.edit[12]',{id:$scope.getId});
            $scope.menuClass='editMenu';
        }
    };
    //删除
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.project.cost.list.delete[12]',{id:$scope.getId});
            $scope.menuClass='deleteMenu';
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.collect = function(){
        $scope.menuClass = 'collectMenu'
    };
    $scope.summary = function(){
        $scope.menuClass = 'summaryMenu'
    };
    $scope.collectPro = function(){
        $scope.menuClass = 'collectProMenu'
    };
    //查看详细信息
    $scope.$on("socialListId", function(event, suId){
        $scope.idSocialList = suId;
    });
    $scope.details = function(){
        if($scope.idSocialList){
            $state.go('root.project.cost.details[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'detailsMenu'
        }
    };
    //项目名称对应明细
    $scope.detailName = function(){
        if($scope.idSocialList){
            $state.go('root.project.cost.detailName[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'detailNameMenu'
        }
    };
    //项目组汇总对应明细
    $scope.detailGroup = function(){
        if($scope.idSocialList){
            $state.go('root.project.cost.detailGroup[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'detailGroupMenu'
        }
    };

});


