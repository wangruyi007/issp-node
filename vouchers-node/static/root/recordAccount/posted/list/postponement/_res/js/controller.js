var app = angular.module('postponement', ['toastr','ipCookie']);
app.controller('postponementCtrl',function($scope,postedSer,toastr,$stateParams,$state,$location,ipCookie){
    //反过账
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
        postedSer.antiPosting(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "反过账已成功", '温馨提示');
                $state.go('root.recordAccount.posted.list');
                $scope.antId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('antiId', $scope.antId);
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


