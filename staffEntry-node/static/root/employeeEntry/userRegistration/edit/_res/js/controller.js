var app = angular.module('userRegistrationEdit', ['toastr']);
app.controller('userRegistrationEditCtrl', function($scope, userRegistrationSer,$state,toastr,$stateParams){
    var userId = {id : $stateParams.id};
    //获取id
    userRegistrationSer.getRegisterId(userId).then(function(response){
        if(response.data.code==0){
            $scope.dataEdit = response.data.data;
        }else {
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    //点击提交
    $scope.EditFun =function(){
        var dataEdit = $scope.dataEdit;
        userRegistrationSer.registerEdit(dataEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.employeeEntry.userRegistration.list');
                toastr.success('温馨提示',"此次编辑成功");
            }else {
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    }
    
});
   