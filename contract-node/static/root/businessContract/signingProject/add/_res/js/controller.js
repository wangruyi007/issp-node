var app = angular.module('signingAdd', ['toastr']);
app.controller('signingAddCtrl', function($scope, signingSer,$state,toastr){

    //添加
    $scope.signingAddFun = function(){
        var vm = $scope;
        vm.signing.startProjectTime = angular.element('.addTime').val();
        vm.signing.endProjectTime = angular.element('.endTime').val();
        signingSer.addSigning(vm.signing).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.signingProject.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




