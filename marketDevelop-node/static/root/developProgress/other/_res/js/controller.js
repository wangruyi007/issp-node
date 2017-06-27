var app = angular.module('other', []);
app.controller('otherCtrl', function ($scope,$state) {
    if ($state.current.url == '/other') {//默认加载列表
        $state.go('root.developProgress.other.businessType');
    }
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('getId',msg)
    });
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
});

