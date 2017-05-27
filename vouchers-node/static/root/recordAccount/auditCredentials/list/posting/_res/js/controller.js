var app = angular.module('auditCredenialsPosting', ['toastr','ipCookie']);
app.controller('postingCtrl',function($scope,credentialsSer,toastr,$stateParams,$state,$location,ipCookie){
    //过账

    $scope.delYes = function(){
        var data = {
            ids : $stateParams.ids
        };
        credentialsSer.postingCredentials(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已过账", '温馨提示');
                $state.go('root.recordAccount.auditCredentials.list');
                $scope.postids = $stateParams.ids;
                //向父Ctrl传递事件
                $scope.$emit('postId', $scope.postids);
                $scope.$emit('changeId', null);
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        })
    }


});


