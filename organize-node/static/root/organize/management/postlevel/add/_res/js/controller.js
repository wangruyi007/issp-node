var app = angular.module('postlevelAdd', ['toastr','ipCookie']);
app.controller('postlevelAddCtrl', function($scope,$state,toastr,postlevelSer,ipCookie,$location){

    //获取上级
    postlevelSer.parentId().then(function(response){
        if(response.data.code==0){
            $scope.parents = response.data.data
        }
    });

    $scope.postlevelAddFun=function(){
        var vm = $scope;
        var data = {
            serialNumber:vm.serialNumber,
            arrangement:vm.arrangement,
            parentId:vm.parentId,
            description:vm.description
        }
        postlevelSer.addPostlevel(data).then(function(response){

            if(response.data.code == 0){
                $state.go('root.organize.management.postlevel.list');
                toastr.success( vm.serialNumber+"已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        })
    }
});





