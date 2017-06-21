var app = angular.module('sort', []);
app.controller('sortCtrl', function ($scope,$state) {
    if ($state.current.url == '/sort') {//默认加载列表
         $state.go('root.initialize.sort.assets');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
})