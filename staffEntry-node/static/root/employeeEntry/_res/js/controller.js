var app = angular.module('employeeEntry', []);
app.controller('employeeEntryCtrl', function ($scope,$state) {
    if ($state.current.url == '/employeeEntry') {//默认加载列表
         $state.go('root.employeeEntry.userRegistration');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
    // $scope.$on('changeName',function(event,Newname){
    //     $scope.$broadcast('selName',Newname);
    // })
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='userRegistration';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'userRegistration';
    $scope.navClass = function(name){
        $scope.navCla = name;
    }

});