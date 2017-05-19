var app = angular.module('bill', ['toastr','ipCookie']);
app.controller('billCtrl',function($scope,postedSer,toastr,$stateParams,$state,$location,ipCookie){
    //结账

    $scope.delYes = function(){

        var data = {
            ids : $stateParams.ids
        };
        postedSer.billCheck(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "结账成功", '温馨提示');
                $state.go('root.recordAccount.posted.list');
                $scope.billids = $stateParams.ids;
                //向父Ctrl传递事件
                $scope.$emit('billId', $scope.billids);
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


