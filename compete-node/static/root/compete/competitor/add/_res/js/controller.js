var app = angular.module('companyAdd', ['toastr','ipCookie']);
app.controller('companyAddCtrl', function($scope, competitorSer,$state,toastr,$location,ipCookie){
    //添加竞争对手
    $scope.companyAddFun = function(){
        var data = $scope.data;
        var vm =this;
        competitorSer.addCompanyAbility(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.competitor.list');
                toastr.success( vm.addCompany+"已成功添加", '温馨提示');
            }else if(response.data.code==403 || response.data.code==401){
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





