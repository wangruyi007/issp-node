var app = angular.module('postlevelDelete', ['toastr','ipCookie']);
app.controller('postlevelDeleteCtrl',function($scope,toastr,$stateParams,$state,postlevelSer,ipCookie,$location){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        };
        postlevelSer.deletePostlevel(data).then(function(response){
            if(response.data.code==0){
                if(!response.data.data){
                    toastr.info( response.data.msg, '温馨提示');
                    $state.go('root.organize.management.postlevel.list');
                }else {
                    toastr.info( "信息已删除", '温馨提示');
                    $state.go('root.organize.management.postlevel.list');
                    $scope.deledId = $stateParams.id;
                    //向父Ctrl传递事件
                    $scope.$emit('deletedId', $scope.deledId);
                    $scope.$emit('changeId', null)
                }
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


