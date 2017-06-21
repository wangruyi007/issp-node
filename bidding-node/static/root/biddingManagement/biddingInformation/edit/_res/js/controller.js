var app = angular.module('infoEdit', ['toastr']);
app.controller('infoEditCtrl', function($scope, infoSer,$stateParams,$state,toastr){
    var infoData ={id: $stateParams.id};

    //获取ID
    infoSer.findInfoId(infoData).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.infoEditFun = function(){
        var vm = $scope;
        vm.editInfo.registrationTime = angular.element('.registrationTime').val();
        vm.editInfo.biddingTime = angular.element('.biddingTime').val();
        vm.editInfo.buyTenderTime = angular.element('.buyTenderTime').val();
        vm.editInfo.marginTime = angular.element('.marginTime').val();
        vm.editInfo.backTimeDeposit = angular.element('.backTimeDeposit').val();
        infoSer.editInfo(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.biddingManagement.biddingInformation.list');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





