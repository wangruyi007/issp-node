var app = angular.module('userRegistrationAdd', ['toastr','ipCookie']);
app.controller('userRegistrationAddCtrl', function($scope, userRegistrationSer,$state,toastr,$location,ipCookie){
    //获取员工编号
    userRegistrationSer.getUserNumber().then(function(response){
        if(response.data.code == 0){
            $scope.numbers = response.data.data
        }
    });
    //添加
    $scope.AddFun = function(){
        var data = $scope.data;
        data.empNumber = $scope.numbers;
        userRegistrationSer.addRegister(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.employeeEntry.userRegistration.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
});




