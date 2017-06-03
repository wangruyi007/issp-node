var app = angular.module('contractTypeAdd', ['toastr','ipCookie']);
app.controller('contractTypeAddCtrl', function($scope, contractSer,$state,toastr,$location,ipCookie){

    //添加
    $scope.contractAddFun = function(){
        var vm = $scope;

        contractSer.addContract(vm.contract).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.contractType.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };

});




