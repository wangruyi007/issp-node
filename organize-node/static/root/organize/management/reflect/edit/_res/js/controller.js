var app = angular.module('reflectEdit', ['toastr','ipCookie']);
app.controller('reflectEditCtrl', function($scope,$state,toastr,reflectSer,$stateParams,$location,ipCookie){

    var getIdList={id:$stateParams.id};

    reflectSer.getReflect(getIdList).then(function(response){
        if(response.data.code==0){
            $scope.reflectData=response.data.data;
        }
    });

    $scope.reflectEditFun = function(){
        $scope.reflectData.id=$stateParams.id;
        var data = $scope.reflectData;
        reflectSer.editReflect(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.reflect.list');
                toastr.success("已成功编辑", '温馨提示');
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





