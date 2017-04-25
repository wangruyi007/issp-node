var app = angular.module('plan', []);
app.controller('planCtrl', function ($scope,$state) {
    if ($state.current.url == '/plan') {//默认加载列表
        $state.go('root.developProgress.plan.yearPlan');
    }
    $scope.$on('changeId',function(event,msg){

        $scope.$broadcast('getId',msg)
    });

})

