var app = angular.module('taxEdit', ['toastr','ipCookie']);
app.controller('taxEditCtrl', function($scope, taxSer,$state,toastr,$stateParams,ipCookie,$location){
    var taxId = {id : $stateParams.id};
    //获取值
    taxSer.changeOne(taxId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.taxEditFun = function(){
        var vm = $scope;
        var data = vm.data;

        var d =  angular.element('.time').val();
        data.changeDate=d;
        
        taxSer.changeEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.tax.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){

                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        });
    };
});

