var app = angular.module('cooperationEdit', ['toastr','ipCookie']);
app.controller('cooperationEditCtrl', function($scope, cooperationSer,$state,toastr,$stateParams,ipCookie,$location){
    var coopcapId = {id : $stateParams.id};
    //获取值
    cooperationSer.getThreeById(coopcapId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else if (response.data.code == 403||response.data.code==401) {
            toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
            var absurl = $location.absUrl();
            ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
            setTimeout(function(){
                window.location.href='http://localhost/login'
            },3000)
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.coopcapIdEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.editInfo.id,
            companyName: vm.editInfo.companyName,
            professionAuthen: vm.editInfo.professionAuthen,
            manageAuthen: vm.editInfo.manageAuthen,
            companyCertificate: vm.editInfo.companyCertificate,
            companyProject: vm.editInfo.companyProject,
            completePro: vm.editInfo.completePro,
        };
        cooperationSer.editCooperationAbility(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.cooperation.list');
                toastr.success(vm.editInfo.companyName+ "已成功编辑", '温馨提示');
            }else if (response.data.code == 403||response.data.code==401) {
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
         }
      });
    };
    //可手填的下拉框
    $scope.changeSelect=function(){
        $scope.editInfo.professionAuthen = $scope.editInfo.professionAuthen2;
    };
    $scope.changeSelect2=function(){
        $scope.editInfo.manageAuthen = $scope.editInfo.manageAuthen2;
    };
});