var app = angular.module('contract', []);
app.controller('contractCtrl', function ($scope,$state) {
    if ($state.current.url == '/contract') {//默认加载列表
         $state.go('root.business.contract.ssui');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
})