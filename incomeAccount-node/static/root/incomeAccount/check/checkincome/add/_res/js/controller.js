/**
 */
var app = angular.module('checkincomeAdd', ['toastr','ipCookie']);
app.controller('checkincomeAddCtrl', function($scope, checkincomeSer,$state,toastr,$location,ipCookie){

    //添加
    $scope.AddFun = function(){
        $scope.data.time = angular.element('.time').val();
        var data = $scope.data;
        checkincomeSer.addData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.incomeAccount.check.checkincome.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
});



