var app = angular.module('registeredEdit', ['toastr','ipCookie']);
app.controller('registeredEditCtrl', function($scope, registeredSer,$state,toastr,$stateParams,ipCookie,$location){
    var registeredId = {id : $stateParams.id};
    //获取值
    registeredSer.loginOne(registeredId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.competitorEditFun =function(){
        var vm = $scope;
        var data = vm.data
        registeredSer.loginEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.registered.list');
                toastr.success('温馨提示',"此次编辑成功");
            }else if(response.data.code==403||response.data.code==401){

                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    }
});
