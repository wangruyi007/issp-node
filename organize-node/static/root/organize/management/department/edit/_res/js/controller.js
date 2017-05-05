var app = angular.module('departmentEdit', ['toastr']);
app.controller('departmentEditCtrl', function($scope,$state,$stateParams,toastr,departSer){

    var getIdList={id:$stateParams.id};

    departSer.getDepartment(getIdList).then(function(response){
        if(response.data.code==0){
            $scope.departmentData=response.data.data;
        }
    });

    //获取体系
    departSer.getSystem().then(function(response){
        if(response.data.code==0){
            $scope.systemList = response.data.data
        }
    });

    $scope.departmentEditFun = function(){
        $scope.departmentData.id=$stateParams.id;
        var data = $scope.departmentData;
        departSer.editDepartment(data).then(function(response){
            console.info(response);
            if(response.data.code == 0){
                $state.go('root.organize.management.department.list');
                toastr.success( $scope.departmentData.serialNumber+"已成功编辑", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





