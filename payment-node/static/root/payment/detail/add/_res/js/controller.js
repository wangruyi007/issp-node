var app = angular.module('detailAdd', ['toastr','ipCookie']);
app.controller('detailAddCtrl', function ($scope, detailSer, $state, toastr,ipCookie,$location) {
    detailSer.idByDetail().then(function(response){
        if(response.data.code == 0){
            $scope.idData = response.data.data;
        }
    });
    //添加
    $scope.detailAddFun = function () {
        var vm = $scope;
        vm.add.finishTime=angular.element('.finishTime').val();
        vm.add.checkTime=angular.element('.checkTime').val();
        vm.add.auditTime=angular.element('.auditTime').val();
        vm.add.countTime=angular.element('.countTime').val();
        vm.add.billTime=angular.element('.billTime').val();
        vm.add.planTime=angular.element('.planTime').val();
        vm.add.accountTime=angular.element('.accountTime').val();
        detailSer.addDetail(vm.add).then(function (response) {
            console.log(vm.add.contractorId);
            if (response.data.code == 0) {
                $state.go('root.payment.detail.list');
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




