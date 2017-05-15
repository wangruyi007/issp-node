var app = angular.module('check', []);
app.controller('checkCtrl', function ($scope,$state) {
    if ($state.current.url == '/check') {//默认加载列表
         $state.go('root.incomeAccount.check.checkindex');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
})