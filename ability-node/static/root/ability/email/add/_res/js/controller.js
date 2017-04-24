/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('emailAdd', ['toastr']);
app.controller('emailAddCtrl', function($scope, emailSer,$state,toastr){

    $scope.myFunc = function() {
        var type={type:$scope.type}
        emailSer.listNameType(type).then(function(response){
            if(response.data.code == 0){
                $scope.companyNames = response.data.data;
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };


    //添加个人能力
    $scope.emailAddFun = function(){
        var vm = $scope;
        var data = {
            type: vm.type,
            companyOrNames: vm.comNames,
            remark: vm.remark,
            sendNum: vm.sendNum,
            collectSendUnit:vm.collectSendUnit,
            collectUnit: vm.collectUnit,
            status: vm.status,
            sendObjectList: vm.sendObjectList,
           };

        emailSer.addEmail(data).then(function(response){
            console.log(response);
            if(response.data.code == 0){
                $state.go('root.ability.email.list');
                toastr.success( vm.type+"已成功添加", '温馨提示');
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





