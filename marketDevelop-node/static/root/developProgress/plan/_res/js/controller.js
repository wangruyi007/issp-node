var app = angular.module('plan', []);
app.controller('planCtrl', function ($scope,$state) {
    if ($state.current.url == '/plan') {//默认加载列表
        $state.go('root.developProgress.plan.yearPlan');
    }
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('getId',msg)
    });
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
});

