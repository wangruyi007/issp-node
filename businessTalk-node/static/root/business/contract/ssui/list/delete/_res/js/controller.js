var app = angular.module('ssuiDelete', ['toastr','ipCookie']);
app.controller('ssuiDeleteCtrl',function($scope,ssuiSer,toastr,$stateParams,$state,ipCookie,$location){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
        ssuiSer.marketserveapplyDel(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
               $state.go('root.business.contract.ssui.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId)
            }else if(response.data.code == 1){
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }


});
