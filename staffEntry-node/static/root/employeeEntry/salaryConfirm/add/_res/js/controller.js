var app = angular.module('salaryConfirmAdd', ['toastr']);
app.controller('salaryConfirmAddCtrl', function($scope, salaryConfirmSer,$state,toastr){

    //添加
    $scope.AddFun = function(){
        var data = $scope.data;
        data.entryTime = angular.element('.entryTime').val();
        salaryConfirmSer.addConfirm(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.employeeEntry.salaryConfirm.list');
                toastr.success( "已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});




