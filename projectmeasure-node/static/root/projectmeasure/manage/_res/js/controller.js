var app = angular.module('manage', []);
app.controller('manageCtrl', function ($scope,$state) {
    if ($state.current.url == '/manage') {//默认加载列表
         $state.go('root.projectmeasure.manage.basicinfo');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
})