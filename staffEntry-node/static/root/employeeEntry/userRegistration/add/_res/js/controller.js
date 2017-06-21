var app = angular.module('userRegistrationAdd', ['toastr']);
app.controller('userRegistrationAddCtrl', function($scope, userRegistrationSer,$state,toastr){
    //获取员工编号
    userRegistrationSer.getUserNumber().then(function(response){
        if(response.data.code == 0){
            $scope.numbers = response.data.data
        }else {
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    //添加
    $scope.AddFun = function(){
        var data = $scope.data;
        data.empNumber = $scope.numbers;
        userRegistrationSer.addRegister(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.employeeEntry.userRegistration.list');
                toastr.success( "已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});




