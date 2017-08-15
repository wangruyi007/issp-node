var app = angular.module('outsource', []);
app.controller('outsourceCtrl', function ($scope,$state) {
    if ($state.current.url == '/outsource') {//默认加载列表
         $state.go('root.business.outsource.subpackage');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
})