var app = angular.module('moneyAdd', ['toastr']);
app.controller('moneyAddCtrl', function ($scope, moneySer, $state, toastr,ipCookie,$location) {
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
            }else if (response.data.code == 403||response.data.code == 401) {
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
});




