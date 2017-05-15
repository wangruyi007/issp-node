var app = angular.module('outsourcingFeeEdit', ['toastr','ipCookie']);
app.controller('outsourcingFeeEditCtrl', function($scope, outsourcingSer,$stateParams,$state,toastr,$location,ipCookie){
    var outsourcingData ={id: $stateParams.id};

    //获取ID
    outsourcingSer.findOutsourcingId(outsourcingData).then(function(response){
        if(response.data.code=='0'){
            $scope.editOutsourcing = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });


    //编辑点击提交
    $scope.feeEditFun = function(){
        var vm = $scope;
        outsourcingSer.editOutsourcing(vm.editOutsourcing).then(function(response){
            if(response.data.code == 0){
                $state.go('root.managementFee.outsourcingFee.list');
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





