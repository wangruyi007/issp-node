var app = angular.module('salaryConfirmEdit', ['toastr']);
app.controller('salaryConfirmEditCtrl', function($scope, salaryConfirmSer,$state,toastr,$stateParams){
    var userId = {id : $stateParams.id};
    //获取id
    salaryConfirmSer.getConfirmId(userId).then(function(response){
        if(response.data.code==0){
            $scope.dataEdit = response.data.data;
        }else {
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //点击提交
    $scope.EditFun =function(){
        var dataEdit = $scope.dataEdit;
        dataEdit.entryTime = angular.element('.entryTime').val();
        salaryConfirmSer.confirmEdit(dataEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.employeeEntry.salaryConfirm.list');
                toastr.success('温馨提示',"此次编辑成功");
            }else {
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    }
    
});
   