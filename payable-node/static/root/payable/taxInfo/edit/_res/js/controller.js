var app = angular.module('taxInfoEdit', ['toastr','ipCookie']);
app.controller('taxInfoEditCtrl', function($scope, taxInfoSer,$stateParams,$state,toastr,ipCookie,$location){
    var taxData ={id: $stateParams.id};
    //获取ID
    taxInfoSer.findTaxInfoId(taxData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.taxEditFun = function(){
        var vm = $scope;
        vm.editInfo.taxDate = angular.element('.taxDate').val();
        taxInfoSer.editTaxInfo(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.payable.taxInfo.list');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





