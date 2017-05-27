var app = angular.module('levelDelete', ['toastr','ipCookie']);
app.controller('levelDeleteCtrl',function($scope,levelSer,toastr,$stateParams,$state,ipCookie,$location){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        }

        levelSer.deleteLevel(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.customer.level.list');
                $scope.deledId = $stateParams.id;
                $scope.$emit('deletedId', $scope.deledId)
                $scope.$emit('changeId', null)
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://user.issp.bjike.com'
                },2000)
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }


});


