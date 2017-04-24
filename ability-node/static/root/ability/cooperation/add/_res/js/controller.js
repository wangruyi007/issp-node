/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('cooperationAdd', ['toastr']);
app.controller('cooperationAddCtrl', function($scope, cooperationSer,$state,toastr){
    //添加个人能力
    $scope.cooperationAddFun = function(){
        var vm = $scope;
        var data = {
            companyName: vm.addcompanyName,
            professionAuthen: vm.addprofessionAuthen,
            manageAuthen: vm.addmanageAuthen,
            companyCertificate: vm.addcompanyCertificate,
            companyProject: vm.addcompanyProject,
            completePro: vm.addcompletePro,
           };
        cooperationSer.addCooperationAbility(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.cooperation.list');
                toastr.success( vm.addcompanyName+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
    //可手填的下拉框
    $scope.changeSelect=function(){
        $scope.addprofessionAuthen = $scope.addprofessionAuthen2;
    };
    $scope.changeSelect2=function(){
        $scope.addmanageAuthen = $scope.addmanageAuthen2;
    };
});





