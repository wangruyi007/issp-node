var app = angular.module('areaWeekEdit', ['toastr','ipCookie']);
app.controller('areaWeekEditCtrl', function($scope,$state,$stateParams,toastr,areaWeekSer,ipCookie,$location){
    var getId = {id:$stateParams.id};
    areaWeekSer.getAreaWeek(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.areaEditFun = function(){
        areaWeekSer.editAreaWeek($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.budget.areaWeek.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else if (response.data.code == 403||response.data.code == 401) {
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
});





