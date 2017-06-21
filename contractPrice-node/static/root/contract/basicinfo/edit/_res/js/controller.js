var app = angular.module('basicinfoEdit', ['toastr','ipCookie']);
app.controller('basicinfoEditCtrl', function($scope,$state,$stateParams,toastr,basicinfoSer,ipCookie,$location){

    var getId = {id:$stateParams.id};
    basicinfoSer.getBasicinfo(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.basicEditFun = function(){
        $scope.edit.startTime=angular.element('.starttime').val();
        $scope.edit.endTime=angular.element('.endtime').val();
        basicinfoSer.editBasicinfo($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.basicinfo.list');
                toastr.success( $scope.edit.area+"已成功添加", '温馨提示');
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





