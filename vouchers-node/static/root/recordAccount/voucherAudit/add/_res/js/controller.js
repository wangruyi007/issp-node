var app = angular.module('voucherAuditAdd', ['toastr','ipCookie']);
app.controller('voucherAuditAddCtrl', function($scope, auditSer,$state,$stateParams,toastr,$location,ipCookie){

    auditSer.LevelOne().then(function(response){
        if(response.data.code == 0){
            $scope.firstLevel = response.data.data;
        }
    });

    $scope.changSelect = function(){
        var data={firstSel:$scope.voucher.firstSubjects};
        auditSer.LevelTwo(data).then(function(response){
            if(response.data.code == 0){
                $scope.secondLevel = response.data.data;
            }
        });
    };
    $scope.changSelect2 = function(){
        var data={firstSel:$scope.voucher.firstSubjects2};
        auditSer.LevelTwo(data).then(function(response){
            if(response.data.code == 0){
                $scope.secondLevel2 = response.data.data;
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
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });

    };
});




