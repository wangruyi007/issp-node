var app = angular.module('basicInfoProAdd', ['toastr']);
app.controller('basicInfoProAddCtrl', function ($scope, basicInfoSer, $state, toastr,$stateParams) {
    var basicData ={id: $stateParams.id};
    //获取ID
    basicInfoSer.findInfoId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.addInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.taxAddFun = function () {
        var vm = $scope;
        var data={
            payTaxId: vm.addInfo.id,
            project: vm.addInfo.project2,
            taxType:vm.addInfo.taxType2,
            taxRate:vm.addInfo.taxRate2,
            targetTax:vm.addInfo.targetTax2,
            planTax:vm.addInfo.planTax2,
            actualTax:vm.addInfo.actualTax2,
            taxDate: angular.element('.taxDate').val()
        };
        basicInfoSer.addTax(data).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.payable.basicInfo.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});




