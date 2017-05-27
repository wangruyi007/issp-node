var app = angular.module('projectacceptanceEdit', ['toastr','ipCookie']);
app.controller('projectacceptanceEditCtrl', function($scope, projectacceptanceSer,$state,toastr,$stateParams,ipCookie,$location){
    var acceptanceId = {id : $stateParams.id};
    //获取值
    projectacceptanceSer.getAcceptanceById(acceptanceId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.acceptanceProjectEditFun = function(){
        var vm = $scope;
        vm.editInfo.startCheckTime = angular.element('.startCheckTime').val();
        projectacceptanceSer.editProjectAcceptance(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.projectacceptance.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com'});
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        });
    };
});