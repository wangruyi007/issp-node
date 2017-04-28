/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('projectacceptanceEdit', ['toastr']);
app.controller('projectacceptanceEditCtrl', function($scope, projectacceptanceSer,$state,toastr,$stateParams){
    var acceptanceId = {id : $stateParams.id};
    //获取值
    projectacceptanceSer.getAcceptanceById(acceptanceId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.acceptanceProjectEditFun = function(){
        var vm = $scope;
        projectacceptanceSer.editProjectAcceptance(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.projectacceptance.list');
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
        $scope.editInfo.saleNum = $scope.editInfo.saleNum2;
    };
    $scope.changeSelect4=function(){
        $scope.editInfo.dispatchNum = $scope.editInfo.dispatchNum2;
    };
});