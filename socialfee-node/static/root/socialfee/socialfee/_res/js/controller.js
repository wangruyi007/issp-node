var app = angular.module('socialfee', []);
app.controller('socialfeeCtrl', function ($scope,$state) {
    if ($state.current.url == '/socialfee') {//默认加载列表
         $state.go('root.socialfee.socialfee.mainfee');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
})