var app = angular.module('waitconfirmNotarize', ['toastr','ipCookie']);
app.controller('waitconfirmNotarizeCtrl',function($scope,waitconfirmSer,toastr,$stateParams,$state,ipCookie,$location){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
    
            waitconfirmSer.waitconfirmConfirm(data).then(function(response){
             if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.compete.waitconfirm.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('notarizedId', $scope.deledId);
                $scope.$emit('changeId', null);
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
