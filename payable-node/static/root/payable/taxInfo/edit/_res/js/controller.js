var app = angular.module('taxInfoEdit', ['toastr']);
app.controller('taxInfoEditCtrl', function($scope, taxInfoSer,$stateParams,$state,toastr){
    var taxData ={id: $stateParams.id};
    //获取ID
    taxInfoSer.findTaxInfoId(taxData).then(function(response){
        console.log(response)
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
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
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





