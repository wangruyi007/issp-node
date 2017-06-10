var app = angular.module('auditCredenialsAnti', ['toastr']);
app.controller('antiCtrl',function($scope,credentialsSer,toastr,$stateParams,$state){
    //反审核
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
        credentialsSer.antiCredentials(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "反审核已成功", '温馨提示');
                $state.go('root.recordAccount.auditCredentials.list');
                $scope.antId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('antiId', $scope.antId);
                $scope.$emit('changeId', null);
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }


});


