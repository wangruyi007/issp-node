var app = angular.module('measuredAdd', ['toastr']);
app.controller('measuredAddCtrl', function($scope, measuredSer,$state,toastr){

    //添加
    $scope.measuredAddFun = function(){
        var vm = $scope;
        var data = {
            type : vm.addType,
            course : vm.addCourse,
            capital : vm.addCapital,
            staffCost : vm.addStaffCost,
            equipmentCost : vm.addEquipmentCost,
            carCost : vm.addCarCost,
            staff : vm.addStaff,
            equipment : vm.addEquipment,
            car : vm.addCar,
            remark : vm.addRemark
        };
        measuredSer.measuredAdd(data).then(function(response){

            if(response.data.code == 0){
                $state.go('root.developProgress.market.marketMeasured.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

});




