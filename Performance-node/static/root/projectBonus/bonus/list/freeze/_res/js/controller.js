var app = angular.module('bonusFreeze', ['toastr']);
app.controller('bonusFreezeCtrl',function($scope,bonusSer,toastr,$stateParams,$state){
    //冻结
    $scope.congealYes = function(){
        var data = {
            id :$stateParams.id
        }
        bonusSer.bonusFreeze(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $state.go('root.projectBonus.bonus.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('congealId', $scope.deledId)
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }


});


