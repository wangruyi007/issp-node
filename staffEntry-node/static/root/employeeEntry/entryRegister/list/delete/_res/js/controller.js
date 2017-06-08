var app = angular.module('entryRegisterDelete', ['toastr']);
app.controller('DeleteCtrl',function($scope,registerSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
        registerSer.deleteData(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
               $state.go('root.employeeEntry.entryRegister.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId)
            }else {
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    }


});
