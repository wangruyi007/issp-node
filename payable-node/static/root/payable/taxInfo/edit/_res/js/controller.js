var app = angular.module('taxInfoEdit', ['toastr','ipCookie']);
app.controller('taxInfoEditCtrl', function($scope, taxInfoSer,$stateParams,$state,toastr,ipCookie,$location){
    var taxData ={id: $stateParams.id};
    //获取ID
    taxInfoSer.findTaxInfoId(taxData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }
    });
    //编辑点击提交
    $scope.taxEditFun = function(){
        var vm = $scope;
        vm.editInfo.taxDate = angular.element('.taxDate').val();
        taxInfoSer.editTaxInfo(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.payable.taxInfo.list');
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





