var app = angular.module('detailEdit', ['toastr','ipCookie']);
app.controller('detailEditCtrl', function($scope, detailSer,$stateParams,$state,toastr,ipCookie,$location){
    detailSer.idByDetail().then(function(response){
        if(response.data.code == 0){
            $scope.idData = response.data.data;
        }
    });
    var basicData ={id: $stateParams.id};
    //获取ID
    detailSer.findDetailId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }
    });
    //编辑点击提交
    $scope.detailEditFun = function(){
        var vm = $scope;
        vm.editInfo.finishTime=angular.element('.finishTime').val();
        vm.editInfo.checkTime=angular.element('.checkTime').val();
        vm.editInfo.auditTime=angular.element('.auditTime').val();
        vm.editInfo.countTime=angular.element('.countTime').val();
        vm.editInfo.billTime=angular.element('.billTime').val();
        vm.editInfo.planTime=angular.element('.planTime').val();
        vm.editInfo.accountTime=angular.element('.accountTime').val();
        detailSer.editDetail(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.payment.detail.list');
                toastr.success( "编辑成功", '温馨提示');
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





