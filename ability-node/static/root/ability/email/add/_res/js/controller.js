var app = angular.module('emailAdd', ['toastr']);
app.controller('emailAddCtrl', function($scope, emailSer,$state,toastr){
    $scope.myFunc = function() {
        var type={type:$scope.type}
        emailSer.listNameType(type).then(function(response){
            if(response.data.code == 0){
                $scope.companyNames = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
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
            if(response.data.code == 0){
                $state.go('root.ability.email.list');
                toastr.success( vm.type+"已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
});





