var app = angular.module('summary', []);
app.controller('summaryCtrl', function ($scope,$state) {
    if ($state.current.url == '/summary') {//默认加载列表
         $state.go('root.projectmeasure.summary.email');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
})