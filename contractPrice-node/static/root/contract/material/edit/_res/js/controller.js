var app = angular.module('materialEdit', ['toastr','ipCookie']);
app.controller('materialEditCtrl', function($scope,$state,$stateParams,toastr,materialSer,ipCookie,$location){

    var getId = {id:$stateParams.id};
    materialSer.getMaterial(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.materialEditFun = function(){
        $scope.edit.suitableDateStart=angular.element('.starttime').val();
        $scope.edit.suitableDateEnd=angular.element('.endtime').val();
        materialSer.editMaterial($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.material.list');
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





