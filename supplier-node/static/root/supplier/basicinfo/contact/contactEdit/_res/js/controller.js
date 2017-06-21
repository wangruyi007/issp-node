var app = angular.module('contactEdit', ['toastr','ipCookie']);
app.controller('contactEditCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams,ipCookie,$location){
    var contId = {id : $stateParams.suId};
    //获取值
    basicinfoSer.editContactById(contId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.contEditFun = function(){
        var vm = $scope;
        basicinfoSer.editContact(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list');
                toastr.success( "已成功添加", '温馨提示');
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