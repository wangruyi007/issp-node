var app = angular.module('openingEdit', ['toastr']);
app.controller('openingEditCtrl', function($scope, openingSer,$stateParams,$state,toastr){
    var infoData ={id: $stateParams.id};

    //获取ID
    openingSer.findBidOpeningId(infoData).then(function(response){
        if(response.data.code== 0){
            $scope.editOpening = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.openEditFun = function(){
        var vm = $scope;
        vm.editOpening.bidOpeningTime = angular.element('.bidOpeningTime').val();
        openingSer.editBidOpening(vm.editOpening).then(function(response){
            if(response.data.code == 0){
                $state.go('root.biddingManagement.openingInfo.list');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





