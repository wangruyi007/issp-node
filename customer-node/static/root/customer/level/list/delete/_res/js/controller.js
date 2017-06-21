var app = angular.module('levelDelete', ['toastr','ipCookie']);
app.controller('levelDeleteCtrl',function($scope,levelSer,toastr,$stateParams,$state,ipCookie,$location){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        }

        levelSer.deleteLevel(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.customer.level.list');
                $scope.deledId = $stateParams.id;
                $scope.$emit('deletedId', $scope.deledId)
                $scope.$emit('changeId', null)
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }


});


