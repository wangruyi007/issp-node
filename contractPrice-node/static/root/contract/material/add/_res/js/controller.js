var app = angular.module('materialAdd', ['toastr']);
app.controller('materialAddCtrl', function($scope,$state,toastr,materialSer){

    $scope.materialAddFun = function(){
        $scope.add.suitableDateStart=angular.element('.starttime').val();
        $scope.add.suitableDateEnd=angular.element('.endtime').val();
        materialSer.addMaterial($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.material.list');
                toastr.success( $scope.add.customerName+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





