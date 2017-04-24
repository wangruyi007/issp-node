var app = angular.module('monthPlan', [{
    files:[
        "root/developProgress/plan/monthPlan/_res/js/service.js",
    ]
}]);
app.controller('monthPlanCtrl',function ($scope,$state) {
    if ($state.current.url == '/monthPlan') {//默认加载列表
        $state.go('root.developProgress.plan.monthPlan.list')
    }


}).controller('monthPlanMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    console.log(urlName);
    $scope.menuClass = urlName + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idList = msg;
    });

    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.developProgress.plan.monthPlan.list.delete[12]',{id:$scope.idList});
        }
    }

    $scope.edit = function(){
        console.log($scope.idList);
        if($scope.idList){
            $state.go('root.developProgress.plan.monthPlan.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    }

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    }

    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    }
});

//自定义过滤器
app.filter('cover',function(){
   return function(val){
       var result;
       switch(val){
           case "JAN":
               result = "一月";
               break;
           case "FRE":
               result = "二月";
               break;
           case "MAR":
               result = "三月";
               break;
           case "APR":
               result = "四月";
               break;
           case "MAY":
               result = "五月";
               break;
           case "JUN":
               result = "六月";
               break;
           case "JUL":
               result = "七月";
               break;
           case "AUG":
               result = "八月";
               break;
           case "SEP":
               result = "九月";
               break;
           case "OCT":
               result = "十月";
               break;
           case "NOV":
               result = "十一月";
               break;
           case "DEC":
               result = "十二月";
               break;
       }
       return result;
   }
});
