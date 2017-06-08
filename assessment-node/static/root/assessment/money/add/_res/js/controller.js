var app = angular.module('moneyAdd', ['toastr']);
app.controller('moneyAddCtrl', function ($scope, moneySer, $state, toastr) {
    moneySer.allMoneyProjects().then(function(response){
       if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    $scope.myFunc = function() {
        var id={
            id:$scope.projectInfoId
        };
         moneySer.listMoneyById(id).then(function(response){
            if(response.data.code == 0){
                $scope.listNames = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    //添加
    $scope.moneyAddFun = function () {
        var vm = $scope;
            var data ={
                projectInfoId:vm.projectInfoId,
                manageFee:vm.listNames.manageFee,
                fee:vm.listNames.fee,
                budgetFee:vm.add.budgetFee,
                cost:vm.listNames.cost,
                budgetCost:vm.add.budgetCost,
                budgetManageFee:vm.add.budgetManageFee,
                taxes:vm.listNames.taxes,
                budgetTaxes:vm.add.budgetTaxes,
                profit:vm.listNames.profit,
                budgetProfit:vm.add.budgetProfit,
                };
        moneySer.addMoney(data).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.assessment.money.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});




