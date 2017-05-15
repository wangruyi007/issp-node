var app = angular.module('systemCongeal', ['toastr','ipCookie']);
app.controller('systemCongealCtrl',function($scope,toastr,$stateParams,$state,systemSer,ipCookie,$location){

    $scope.congealYes = function(){
        var data = {
            id :$stateParams.id
        }

        systemSer.congealSystem(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $state.go('root.organize.management.system.list');
                //向父Ctrl传递事件
                $scope.$emit('congealId', $stateParams.id);
                $scope.$emit('changeId', null)
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


