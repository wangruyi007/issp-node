var app = angular.module('infoEdit', ['toastr','ipCookie']);
app.controller('infoEditCtrl', function($scope,$state,toastr,infoSer,ipCookie,$location,$stateParams){

    $scope.getId={id:$stateParams.id};
    infoSer.getInfo($scope.getId).then(function(response){
       if(response.data.code==0){
           $scope.edit=response.data.data
       }
    });

    $scope.infoEditFun = function(){
        infoSer.editInfo($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.statement.info.list');
                toastr.success( $scope.edit.name+"已成功编辑", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        });
    };
});





