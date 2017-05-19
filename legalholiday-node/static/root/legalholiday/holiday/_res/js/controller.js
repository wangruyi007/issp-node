var app = angular.module('holiday', []);
app.controller('holidayCtrl', function ($scope,$state) {
    if ($state.current.url == '/holiday') {//默认加载列表
         $state.go('root.legalholiday.holiday.gift');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
    $scope.$on('changeName',function(event,Newname){
        $scope.$broadcast('selName',Newname);
    })
})