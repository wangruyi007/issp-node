/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('cooperationEdit', ['toastr']);
app.controller('cooperationEditCtrl', function($scope, cooperationSer,$state,toastr,$stateParams){
    var coopcapId = {id : $stateParams.id};
    //获取值
    cooperationSer.getThreeById(coopcapId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
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
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
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