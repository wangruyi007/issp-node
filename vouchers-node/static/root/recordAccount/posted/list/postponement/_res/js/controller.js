var app = angular.module('postponement', ['toastr']);
app.controller('postponementCtrl',function($scope,postedSer,toastr,$stateParams,$state){
    //反过账
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
        postedSer.antiPosting(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "反过账已成功", '温馨提示');
                $state.go('root.recordAccount.posted.list');
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


