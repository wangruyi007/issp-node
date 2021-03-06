var app = angular.module('jopdetailEdit', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('jopdetailEditCtrl', function($scope,$state,$stateParams,toastr,jopdetailSer,$location,ipCookie){

    jopdetailSer.getPosiInst().then(function(response){
        if(response.data.code==0){
            $scope.positions= response.data.data;
        }
    });

    var id = {id:$stateParams.id};
    //根据ID获取信息
    jopdetailSer.getJopdetail(id).then(function(response){
        if(response.data.code == 0){
            $scope.edit = response.data.data
        }
    });

    $scope.jopdetailEditFun = function(){
        jopdetailSer.editJopdetail($scope.edit).then(function(response){
            if(response.data.code==0){
                    $state.go('root.organize.management.jopdetail.list');
                    toastr.success(response.data.data.serialNumber+"已成功编辑", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        });
    }
});





