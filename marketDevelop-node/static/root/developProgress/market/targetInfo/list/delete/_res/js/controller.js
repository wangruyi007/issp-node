var app = angular.module('targetInfoDelete', ['toastr']);
app.controller('targetInfoDeleteCtrl',function($scope,targetInfoSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        }

        targetInfoSer.deleteTargetInfo(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.developProgress.market.targetInfo.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId)
                $scope.$emit('deletedId', null)
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});


