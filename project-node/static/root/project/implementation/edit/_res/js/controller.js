/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('implementationEdit', ['toastr']);
app.controller('implementationEditCtrl', function($scope, implementationSer,$state,toastr,$stateParams,ipCookie,$location){
    var projectId = {id : $stateParams.id};
    //获取值
    implementationSer.getImplementationOneById(projectId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.implementationEditFun = function(){
        var vm = $scope;
        implementationSer.editImplementationProject(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.implementation.list');
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