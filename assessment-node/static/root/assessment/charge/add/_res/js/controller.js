var app = angular.module('chargeAdd', ['toastr']);
app.controller('chargeAddCtrl', function ($scope, chargeSer, $state, toastr) {
    chargeSer.allChargeProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //添加
    $scope.chargeAddFun = function () {
        var vm = $scope;
        chargeSer.addCharge(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.assessment.charge.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});




