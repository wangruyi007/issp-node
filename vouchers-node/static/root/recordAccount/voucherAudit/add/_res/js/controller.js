var app = angular.module('voucherAuditAdd', ['toastr']);
app.controller('voucherAuditAddCtrl', function($scope, auditSer,$state,$stateParams,toastr){

    auditSer.LevelOne().then(function(response){
        if(response.data.code == 0){
            $scope.firstLevel = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    $scope.changSelect = function(){
        var data={firstSel:$scope.voucher.firstSubjects};
        auditSer.LevelTwo(data).then(function(response){
            if(response.data.code == 0){
                $scope.secondLevel = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.changSelect2 = function(){
        var data={firstSel:$scope.voucher.firstSubjects2};
        auditSer.LevelTwo(data).then(function(response){
            if(response.data.code == 0){
                $scope.secondLevel2 = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.changThird = function(){
        var data={
            firstSel:$scope.voucher.firstSubjects,
            secondSel:$scope.voucher.secondSubjects
        };
        auditSer.LevelThree(data).then(function(response){
            if(response.data.code == 0){
                $scope.thirdLevel = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.changThird2 = function(){
        var data={
            firstSel:$scope.voucher.firstSubjects2,
            secondSel:$scope.voucher.secondSubjects2
        };
        auditSer.LevelThree(data).then(function(response){
            if(response.data.code == 0){
                $scope.thirdLevel2 = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };

    //添加
    $scope.auditAddFun = function(){
        var vm = $scope;
        vm.voucher.firstSubjects=vm.voucher.firstSubjects2;
        vm.voucher.secondSubjects=vm.voucher.secondSubjects2;
        vm.voucher.thirdSubjects=vm.voucher.thirdSubjects2;
        vm.voucher.borrowMoneys=vm.voucher.borrowMoneys2;
        vm.voucher.loanMoneys = vm.voucher.loanMoneys2;
        vm.voucher.voucherDate = angular.element('.voucherDate').val();
        auditSer.addVoucher(vm.voucher).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recordAccount.voucherAudit.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
});




