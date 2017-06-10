var app = angular.module('mailSummaryDelete', ['toastr']);
app.controller('deleteCtrl',function($scope,emailSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        };

        emailSer.deleteEmail(data).then(function(response){
            console.log(response);
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.businessContract.mailSummary.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId);
                $scope.$emit('changeId', null);
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }


});


