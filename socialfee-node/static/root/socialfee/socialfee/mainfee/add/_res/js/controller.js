/**
 */
var app = angular.module('mainfeeAdd', ['toastr','ipCookie']);
app.controller('mainfeeAddCtrl', function($scope, mainfeeSer,$state,toastr,$location,ipCookie){
    //年份
    $scope.years = [];
    for(let i = 1978;i < 2078; i++){
        $scope.years.push(i);
    }
    //月份
    $scope.monthes = [01,02,03,04,05,06,07,08,09,10,11,12];

    //添加
    $scope.AddFun = function(){
        var data = $scope.data;
        mainfeeSer.addData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.socialfee.socialfee.mainfee.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403  || response.data.code==401){
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



