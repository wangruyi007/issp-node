var app = angular.module('interface', []);
app.controller('interfaceCtrl', function ($scope,$state) {
    if ($state.current.url == '/interface') {//默认加载列表
         $state.go('root.projectmeasure.interface.ssui');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
})