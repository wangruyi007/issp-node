var app = angular.module('voucherGenerationEdit', ['toastr','ipCookie']);
app.controller('voucherGenerationEditCtrl', function($scope, voucherSer,$stateParams,$state,toastr,$location,ipCookie){
    var voucherData ={id: $stateParams.id};

    //获取ID
    voucherSer.findVoucherId(voucherData).then(function(response){
        if(response.data.code=='0'){
            $scope.editVoucher = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });

    voucherSer.LevelOne().then(function(response){
        if(response.data.code == 0){
            $scope.firstLevel = response.data.data;
        }
    });

    $scope.changSelect = function(){
        var data={firstSel:$scope.editVoucher.firstSubjects};
        voucherSer.LevelTwo(data).then(function(response){
            if(response.data.code == 0){
                $scope.secondLevel = response.data.data;
            }
        });
    };
    $scope.changThird = function(){
        var data={
            firstSel:$scope.editVoucher.firstSubjects,
            secondSel:$scope.editVoucher.secondSubjects
        };
        voucherSer.LevelThree(data).then(function(response){
            if(response.data.code == 0){
                $scope.thirdLevel = response.data.data;
            }
        });
    };
    //编辑点击提交
    $scope.generationEditFun = function(){
        var vm = $scope;
        vm.editVoucher.voucherDate = angular.element('.voucherDate').val();
        vm.editVoucher.borrowMoneys = vm.editVoucher.borrowMoney;
        vm.editVoucher.loanMoneys = vm.editVoucher.loanMoney;
        voucherSer.editGeneration(vm.editVoucher).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recordAccount.voucherGeneration.list');
                toastr.success( "编辑成功", '温馨提示');
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





