var app = angular.module('taxes', []);
app.controller('taxesCtrl', function ($scope,$state) {
    if ($state.current.url == '/taxes') {//默认加载列表
         $state.go('root.taxes.taxes.taxesmanage');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
})