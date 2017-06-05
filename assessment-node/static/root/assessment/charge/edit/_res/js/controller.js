var app = angular.module('chargeEdit', ['toastr']);
app.controller('chargeEditCtrl', function($scope, chargeSer,$stateParams,$state,toastr){
    chargeSer.allChargeProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    var chargeData ={id: $stateParams.id};
    //获取ID
    chargeSer.findChargeId(chargeData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }
    });
    //编辑点击提交
    $scope.chargeEditFun = function(){
        var vm = $scope;
        chargeSer.editCharge(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.charge.list');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





