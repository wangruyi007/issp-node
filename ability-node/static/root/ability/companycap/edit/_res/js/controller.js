/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('companyEdit', ['toastr']);
app.controller('companyEditCtrl', function($scope, companycapSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    companycapSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.companyEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.editInfo.id,
            company: vm.editInfo.company,
            professionAuthen: vm.editInfo.professionAuthen,
            manageAuthen: vm.editInfo.manageAuthen,
            companyCertificate: vm.editInfo.companyCertificate,
            companyDevelop: vm.editInfo.companyDevelop,
            projectDevelop: vm.editInfo.projectDevelop,
            area: vm.editInfo.area,
            money: vm.editInfo.money,
            personForm: vm.editInfo.personForm,
            config: vm.editInfo.config,
            device: vm.editInfo.device,
            companyArea: vm.editInfo.companyArea,
            companyBusiness: vm.editInfo.companyBusiness,
            cooperate: vm.editInfo.cooperate,
            completePro: vm.editInfo.completePro,
            inProjct: vm.editInfo.inProjct,
            culture: vm.editInfo.culture,
            holidayActive: vm.editInfo.holidayActive,
            bulletinBoard: vm.editInfo.bulletinBoard,
            createTime: vm.editInfo.createTime,
            modifyTime: vm.editInfo.modifyTime,
        };
        companycapSer.editCompanyAbility(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.companycap.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
    //可手填的下拉框
    $scope.changeSelect=function(){
        $scope.editInfo.professionAuthen = $scope.editInfo.professionAuthen2;
    };
    $scope.changeSelect2=function(){$scope.editInfo.manageAuthen = $scope.editInfo.manageAuthen2;};
    $scope.changeSelect3=function(){$scope.editInfo.companyDevelop = $scope.editInfo.companyDevelop2;};
    $scope.changeSelect4=function(){$scope.editInfo.area = $scope.editInfo.area2;};
    $scope.changeSelect5=function(){$scope.editInfo.money = $scope.editInfo.money2;};
    $scope.changeSelect6=function(){$scope.editInfo.personForm = $scope.editInfo.personForm2;};
    $scope.changeSelect7=function(){$scope.editInfo.cooperate = $scope.editInfo.cooperate2;};
});