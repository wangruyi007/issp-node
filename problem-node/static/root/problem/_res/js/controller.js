var app = angular.module('business', []);
app.controller('businessCtrl', function ($scope,$state) {
    if ($state.current.url == '/problem') {//默认加载列表
         $state.go('root.problem.basicinfo');
    }
    //父 Ctrl 监听到事件，向下广播
/*    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
    $scope.$on('changeCusnum',function(event,num){
        $scope.$broadcast('getCustomer',num)
    });*/

});

