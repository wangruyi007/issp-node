/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('implementationEdit', ['toastr']);
app.controller('implementationEditCtrl', function($scope, implementationSer,$state,toastr,$stateParams){
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
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
    $scope.changeSelect=function(){
        $scope.editInfo.outerName = $scope.editInfo.outerName2;
    };
    $scope.changeSelect2=function(){
        $scope.editInfo.innerName = $scope.editInfo.innerName2;
    };
    $scope.changeSelect3=function(){
        $scope.editInfo.signProject = $scope.editInfo.signProject2;
    };
    $scope.changeSelect4=function(){
        $scope.editInfo.depatchNum = $scope.editInfo.depatchNum2;
    };
    $scope.changeSelect5=function(){
        $scope.editInfo.businessType = $scope.editInfo.businessType2;
    };
    $scope.changeSelect6=function(){
        $scope.editInfo.businessSubject = $scope.editInfo.businessSubject2;
    };
});