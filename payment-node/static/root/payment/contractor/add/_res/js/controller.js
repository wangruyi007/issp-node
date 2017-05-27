var app = angular.module('contractorAdd', ['toastr','ipCookie']);
app.controller('contractorAddCtrl', function ($scope, contractorSer, $state, toastr,ipCookie,$location) {

    //添加
    $scope.detailAddFun = function () {
        var vm = $scope;
        vm.add.creationTime=angular.element('.creationTime').val();
        contractorSer.addContractor(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.payment.contractor.list');
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




