var app = angular.module('materialCongeal', ['toastr']);
app.controller('materialCongealCtrl',function($scope,toastr,$stateParams,$state,materialSer){

    $scope.conYes = function(){

        var data = {
            id :$stateParams.id
        }

        materialSer.congealMaterial(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $state.go('root.contract.material.list');
                //向父Ctrl传递事件
                $scope.$emit('congealId', $stateParams.id);
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});


