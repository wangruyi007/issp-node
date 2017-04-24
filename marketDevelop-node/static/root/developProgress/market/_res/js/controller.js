var app = angular.module('market', []);
app.controller('marketCtrl', function ($scope,$state) {
    if ($state.current.url == '/market') {//默认加载列表
        $state.go('root.developProgress.market.demandAnalysis');
    }
    $scope.$on('changeId',function(event,msg){

        $scope.$broadcast('getId',msg)
    });

})

