var app = angular.module('bill', ['toastr']);
app.controller('billCtrl',function($scope,postedSer,toastr,$stateParams,$state){
    //结账

    $scope.delYes = function(){

        var data = {
            ids : $stateParams.ids
        };
        postedSer.billCheck(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "结账成功", '温馨提示');
                $state.go('root.recordAccount.posted.list');
                $scope.billids = $stateParams.ids;
                //向父Ctrl传递事件
                $scope.$emit('billId', $scope.billids);
                $scope.$emit('changeId', null);
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }


});


