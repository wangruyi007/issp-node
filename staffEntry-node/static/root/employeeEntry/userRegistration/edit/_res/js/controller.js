var app = angular.module('userRegistrationEdit', ['toastr','ipCookie']);
app.controller('userRegistrationEditCtrl', function($scope, userRegistrationSer,$state,toastr,$stateParams,$location,ipCookie){
    var userId = {id : $stateParams.id};
    //获取id
    userRegistrationSer.getRegisterId(userId).then(function(response){
        if(response.data.code==0){
            $scope.dataEdit = response.data.data;
        }
    });
    //点击提交
    $scope.EditFun =function(){
        var dataEdit = $scope.dataEdit;
        userRegistrationSer.registerEdit(dataEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.employeeEntry.userRegistration.list');
                toastr.success('温馨提示',"此次编辑成功");
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        })
    }
    
});
   