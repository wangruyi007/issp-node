var app = angular.module('spendAdd', ['toastr','ipCookie']);
app.controller('spendAddCtrl', function($scope, spendSer,$state,toastr,$location,ipCookie){

    spendSer.getYear().then(function(response){
        if(response.data.code == '0'){
            $scope.spendYear = response.data.data;
        }else if(response.data.code == 403){
            toastr.error( "请登录用户", '温馨提示');
        }
    });
    //添加
    $scope.spendAddFun = function(){
        var vm = $scope;
        spendSer.addSpend(vm.spend).then(function(response){
            if(response.data.code == 0){
                $state.go('root.managementFee.managementSpend.list');
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




