/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('resultAdd', ['toastr']);
app.controller('resultAddCtrl', function($scope, resultSer,$state,toastr,ipCookie,$location){
    resultSer.listResultProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //查询所有地区
    resultSer.listResultArea().then(function(response){
        if(response.data.code == 0){
            $scope.areaData = response.data.data;
        }
    });

    //添加个人能力
    $scope.emailAddFun = function(){
        var vm = $scope;
        resultSer.addResult(vm.add).then(function(response){
            console.log(response)
            if(response.data.code == 0){
                $state.go('root.assessment.result.list');
                toastr.success( vm.type+"已成功添加", '温馨提示');
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





