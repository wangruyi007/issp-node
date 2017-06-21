var app = angular.module('basicAdd', ['toastr']);
app.controller('basicAddCtrl', function($scope, basicSer,$state,toastr){

    //添加
    $scope.basicAddFun = function(){
        var vm = $scope;
        vm.basic.siginTime = angular.element('.siginTime').val();
        vm.basic.startProjectTime = angular.element('.addTime').val();
        vm.basic.endProjectTime = angular.element('.endTime').val();
        basicSer.addBasicInfo(vm.basic).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.basicInfo.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




