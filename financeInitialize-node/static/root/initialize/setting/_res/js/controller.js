var app = angular.module('setting', []);
app.controller('settingCtrl', function ($scope,$state) {
    if ($state.current.url == '/setting') {//默认加载列表
         $state.go('root.initialize.setting.currency');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
})