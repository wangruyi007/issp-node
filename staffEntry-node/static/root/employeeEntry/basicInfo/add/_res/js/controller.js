var app = angular.module('basicInfoAdd', ['toastr']);
app.controller('basicInfoAddCtrl', function($scope, basicInfoSer,$state,toastr){

    //添加
    $scope.AddFun = function(){
        var data = $scope.data;
        data.entryTime = angular.element('.entryTime').val();
        basicInfoSer.addBasicInfo(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.employeeEntry.basicInfo.list');
                toastr.success( "已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});




