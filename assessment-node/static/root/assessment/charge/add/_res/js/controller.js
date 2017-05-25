var app = angular.module('chargeAdd', ['toastr','ipCookie']);
app.controller('chargeAddCtrl', function ($scope, chargeSer, $state, toastr,ipCookie,$location) {
    chargeSer.allChargeProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //添加
    $scope.chargeAddFun = function () {
        var vm = $scope;
        chargeSer.addCharge(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.assessment.charge.list');
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




