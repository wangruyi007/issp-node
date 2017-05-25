var app = angular.module('voucherGenerationAdd', ['toastr','ipCookie']);
app.controller('voucherGenerationAddCtrl', function($scope, voucherSer,$state,$stateParams,toastr,$location,ipCookie){

    voucherSer.LevelOne().then(function(response){
        if(response.data.code == 0){
            $scope.firstLevel = response.data.data;
        }
    });

    $scope.changSelect = function(){
        var data={firstSel:$scope.voucher.firstSubjects1};
        voucherSer.LevelTwo(data).then(function(response){
            if(response.data.code == 0){
                $scope.secondLevel = response.data.data;
            }
        });
    };
    $scope.changSelect2 = function(){
        var data={firstSel:$scope.voucher.firstSubjects2};
        voucherSer.LevelTwo(data).then(function(response){
            if(response.data.code == 0){
                $scope.secondLevel2 = response.data.data;
            }
        });
    };
    $scope.changThird = function(){
        var data={
            firstSel:$scope.voucher.firstSubjects1,
            secondSel:$scope.voucher.secondSubjects1
        };
        voucherSer.LevelThree(data).then(function(response){
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
        voucherSer.LevelThree(data).then(function(response){
            if(response.data.code == 0){
                $scope.thirdLevel2 = response.data.data;
            }
        });
    };

    //添加
    $scope.voucherAddFun = function(){
        var vm = $scope;
        vm.voucher.firstSubjects=[vm.voucher.firstSubjects1,vm.voucher.firstSubjects2].join(',');
        vm.voucher.secondSubjects=[vm.voucher.secondSubjects1,vm.voucher.secondSubjects2].join(',');
        vm.voucher.thirdSubjects=[vm.voucher.thirdSubjects1,vm.voucher.thirdSubjects2].join(',');
        vm.voucher.borrowMoneys=[vm.voucher.borrowMoneys1,vm.voucher.borrowMoneys2].join(',');
        vm.voucher.loanMoneys=[vm.voucher.loanMoneys1,vm.voucher.loanMoneys2].join(',');
        vm.voucher.voucherDate = angular.element('.voucherDate').val();
        voucherSer.addVoucher(vm.voucher).then(function(response){
            console.log(response);
            if(response.data.code == 0){
                $state.go('root.recordAccount.voucherGeneration.list');
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




