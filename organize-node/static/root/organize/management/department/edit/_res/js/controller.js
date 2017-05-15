var app = angular.module('departmentEdit', ['toastr','ipCookie']);
app.controller('departmentEditCtrl', function($scope,$state,$stateParams,toastr,departSer,ipCookie,$location){

    var getIdList={id:$stateParams.id};

    departSer.getDepartment(getIdList).then(function(response){
        if(response.data.code==0){
            $scope.departmentData=response.data.data;
        }
    });

    //获取体系
    departSer.getSystem().then(function(response){
        if(response.data.code==0){
            $scope.systemList = response.data.data
        }
    });

    $scope.departmentEditFun = function(){
        $scope.departmentData.id=$stateParams.id;
        var data = $scope.departmentData;
        departSer.editDepartment(data).then(function(response){
            if(response.data.code == 0){
                if(!response.data.data){
                    toastr.info( response.data.msg, '温馨提示');
                }else {
                    $state.go('root.organize.management.department.list');
                    toastr.success( $scope.departmentData.serialNumber+"已成功编辑", '温馨提示');
                }

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





