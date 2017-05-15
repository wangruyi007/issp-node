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
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }
    });
    //编辑点击提交
    $scope.chargeEditFun = function(){
        var vm = $scope;
        chargeSer.editCharge(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.charge.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
    //可手填的下拉框
   /* $scope.changeSelect=function(){
        $scope.editInfo.area = $scope.editInfo.area2;
    };*/
});





