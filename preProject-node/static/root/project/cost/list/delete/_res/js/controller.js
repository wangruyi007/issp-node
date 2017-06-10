var app = angular.module('costDelete', ['toastr']);
app.controller('costDeleteCtrl',function($scope,toastr,$stateParams,$state,costSer){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
        costSer.deleteCost(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.project.cost.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId);
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }
});


