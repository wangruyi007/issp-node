/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('companyAdd', ['toastr']);
app.controller('companyAddCtrl', function($scope, companycapSer,$state,toastr){
    //添加公司能力
    $scope.companyAddFun = function(){
        var vm = $scope;
        var data = {
            company: vm.addCompany,
            professionAuthen: vm.addprofessionAuthen1,
            manageAuthen:vm.addmanageAuthen1,
            companyCertificate:vm.addcompanyCertificate,
            companyDevelop:vm.addcompanyDevelop1,
            projectDevelop:vm.addprojectDevelop,
            area:vm.addarea1,
            money:vm.addmoney1,
            personForm:vm.addpersonForm1,
            config:vm.addconfig,
            device:vm.adddevice,
            companyArea:vm.addcompanyArea,
            companyBusiness:vm.addcompanyBusiness,
            cooperate:vm.addcooperate1,
            completePro:vm.addcompletePro,
            inProjct:vm.addinProjct,
            culture:vm.addculture,
            holidayActive:vm.addholidayActive,
            bulletinBoard:vm.addbulletinBoard,
        };
        companycapSer.addCompanyAbility(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.companycap.list');
                toastr.success( vm.addCompany+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
    //可手填的下拉框
    $scope.changeSelect=function(){
         // document.getElementById("input").value=$scope.name2;
        //this.document.getElementsByClassName("inputDom")[0].value=$scope.name2;
        $scope.addprofessionAuthen1 = $scope.addprofessionAuthen2;
    };
    $scope.changeSelect2=function(){
        $scope.addmanageAuthen1 = $scope.addmanageAuthen2;
    };
    $scope.changeSelect3=function(){
        $scope.addcooperate1 = $scope.addcooperate2

    };
    $scope.changeSelect4=function(){

        $scope.addcompanyDevelop1 = $scope.addcompanyDevelop2;
    };
    $scope.changeSelect5=function(){
        $scope.addarea1 = $scope.addarea2;
    };
    $scope.changeSelect6=function(){
        $scope.addmoney1 = $scope.addmoney2;

    };
    $scope.changeSelect7=function(){
        $scope.addpersonForm1 = $scope.addpersonForm2;
    };
});





