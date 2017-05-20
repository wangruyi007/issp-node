var app = angular.module('moneyEdit', ['toastr']);
app.controller('moneyEditCtrl', function($scope, moneySer,$stateParams,$state,toastr){
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
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
    //获取ID
    var monData ={id: $stateParams.id};
    moneySer.findMoneyId(monData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }
    });
    //编辑点击提交
    $scope.moneyEditFun = function(){
        var vm = $scope;
        var data ={
            id:vm.editInfo.id,
            projectInfoId:vm.projectInfoId,
            manageFee:vm.listNames.manageFee,
            fee:vm.listNames.fee,
            budgetFee:vm.editInfo.budgetFee,
            cost:vm.listNames.cost,
            budgetCost:vm.editInfo.budgetCost,
            budgetManageFee:vm.editInfo.budgetManageFee,
            taxes:vm.listNames.taxes,
            budgetTaxes:vm.editInfo.budgetTaxes,
            profit:vm.listNames.profit,
            budgetProfit:vm.editInfo.budgetProfit,
        };
        moneySer.editMoney(data).then(function(response){
             if(response.data.code == 0){
                $state.go('root.assessment.money.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





