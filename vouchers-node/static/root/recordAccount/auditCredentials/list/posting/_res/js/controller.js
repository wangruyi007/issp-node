var app = angular.module('auditCredenialsPosting', ['toastr']);
app.controller('postingCtrl',function($scope,credentialsSer,toastr,$stateParams,$state){
    //过账

    $scope.delYes = function(){
        var data = {
            ids : $stateParams.ids
        };
        credentialsSer.postingCredentials(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已过账", '温馨提示');
                $state.go('root.recordAccount.auditCredentials.list');
                $scope.postids = $stateParams.ids;
                //向父Ctrl传递事件
                $scope.$emit('postId', $scope.postids);
                $scope.$emit('changeId', null);
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }


});


