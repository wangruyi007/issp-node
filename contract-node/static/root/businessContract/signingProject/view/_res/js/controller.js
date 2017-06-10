var app = angular.module('signingView', ['toastr']);
app.controller('signingViewCtrl', function($scope, signingSer,$state,toastr){
    //添加
    $scope.signingAddFun = function(){
        var vm = $scope;
        vm.signing.startProjectTime = angular.element('.addTime').val();
        vm.signing.endProjectTime = angular.element('.endTime').val();
        signingSer.addSigning(vm.signing).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.signingProject.list');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
    $scope.data = [
        {id: 1, name: '检测硬件2'},
    ];
    $scope.selectList=function (event) {
        angular.forEach($scope.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        $scope.$emit('getId', $scope.idListd);
    };
});




