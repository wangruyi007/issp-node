var app = angular.module('cooperationAdd', ['toastr','ipCookie']);
app.controller('cooperationAddCtrl', function($scope, cooperationSer,$state,toastr,ipCookie,$location){
    //添加个人能力
    $scope.cooperationAddFun = function(){
        var vm = $scope;
        var data = {
            companyName: vm.addcompanyName,
            professionAuthen: vm.addprofessionAuthen,
            manageAuthen: vm.addmanageAuthen,
            companyCertificate: vm.addcompanyCertificate,
            companyProject: vm.addcompanyProject,
            completePro: vm.addcompletePro,
           };
        cooperationSer.addCooperationAbility(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.cooperation.list');
                toastr.success( vm.addcompanyName+"已成功添加", '温馨提示');
            }else if (response.data.code == 403||response.data.code==401) {
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });

    };
    //可手填的下拉框
    $scope.changeSelect=function(){
        $scope.addprofessionAuthen = $scope.addprofessionAuthen2;
    };
    $scope.changeSelect2=function(){
        $scope.addmanageAuthen = $scope.addmanageAuthen2;
    };
});





