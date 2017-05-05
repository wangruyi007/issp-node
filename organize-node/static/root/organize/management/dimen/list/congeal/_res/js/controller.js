var app = angular.module('dimenCongeal', ['toastr']);
app.controller('dimenCongealCtrl',function($scope,dimensionSer,toastr,$stateParams,$state){
    //冻结
    $scope.congealYes = function(){
        var data = {
            id :$stateParams.id
        };
        dimensionSer.congealDimension(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $state.go('root.organize.management.dimen.list');
                $scope.conId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('congealId', $scope.conId)
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});


