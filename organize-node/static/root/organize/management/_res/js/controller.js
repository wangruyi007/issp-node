var app = angular.module('management', []);
app.controller('managementCtrl',function ($scope,$state) {

    if ($state.current.url == '/management') {//默认加载列表
        $state.go('root.organize.management.number')
    };

    $scope.$on("changeId",function(event,id){
        $scope.$broadcast("passId",id)
    })
    $scope.$on("changePositionId",function(event,id){
        $scope.$broadcast("passPositionId",id)
    })
})
