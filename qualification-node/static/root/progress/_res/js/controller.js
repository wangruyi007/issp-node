var app = angular.module('business', []);
app.controller('businessCtrl', function ($scope,$state) {
    if ($state.current.url == '/progress') {//默认加载列表
        $state.go('root.progress.summary');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on("changeId",function(event,id){
        $scope.$broadcast("passId",id)
    });

}).controller('navCtrl',function($scope,$state,$location){

});

