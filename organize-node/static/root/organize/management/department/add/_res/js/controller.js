var app = angular.module('departmentAdd', ['toastr']);
app.controller('departmentAddCtrl', function($scope,$state,toastr,departSer){
    //获取体系
    departSer.getSystem().then(function(response){
        if(response.data.code==0){
            $scope.systemList = response.data.data
        }
    });


    $scope.departmentAddFun = function(){
        var vm = $scope;
        var data = {
            serialNumber : vm.serialNumber,
            hierarchyId:vm.hierarchyId,
            area : vm.area,
            department : vm.department,
            classify:vm.classify,
            description:vm.description
        };
        departSer.addDepartment(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.department.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

});





