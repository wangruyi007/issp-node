var app = angular.module('materialCongeal', ['toastr','ipCookie']);
app.controller('materialCongealCtrl',function($scope,toastr,$stateParams,$state,materialSer,ipCookie,$location){

    $scope.conYes = function(){

        var data = {
            id :$stateParams.id
        }

        materialSer.congealMaterial(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $state.go('root.contract.material.list');
                //向父Ctrl传递事件
                $scope.$emit('congealId', $stateParams.id);
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


