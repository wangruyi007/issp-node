var app = angular.module('projectEdit', ['toastr','ipCookie']);
app.controller('projectEditCtrl', function($scope, situationSer,$state,toastr,$stateParams,ipCookie,$location){
    var projectId = {id : $stateParams.id};
    //获取值
    situationSer.getOneById(projectId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.projectEditFun = function(){
        var vm = $scope;
        vm.editInfo.startWorkTime = angular.element('.startWorkTime').val();
        vm.editInfo.planCompleteTime = angular.element('.planCompleteTime').val();
        vm.editInfo.completeTime = angular.element('.completeTime').val();
        situationSer.editProjectSituation(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.situation.list');
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