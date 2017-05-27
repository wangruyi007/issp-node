var app = angular.module('projectAdd', ['toastr','ipCookie']);
app.controller('projectAddCtrl', function($scope, situationSer,$state,toastr,ipCookie,$location){
    //添加公司能力
    $scope.projectAddFun = function(){
        var vm = $scope;
        vm.add.startWorkTime = angular.element('.startWorkTime').val();
        vm.add.planCompleteTime = angular.element('.planCompleteTime').val();
        vm.add.completeTime = angular.element('.completeTime').val();
        situationSer.addProjectSituation(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.situation.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com'});
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





