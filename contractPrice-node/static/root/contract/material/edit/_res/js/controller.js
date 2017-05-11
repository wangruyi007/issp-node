var app = angular.module('materialEdit', ['toastr']);
app.controller('materialEditCtrl', function($scope,$state,$stateParams,toastr,materialSer){

    var getId = {id:$stateParams.id};
    materialSer.getMaterial(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.materialEditFun = function(){
        $scope.edit.suitableDateStart=angular.element('.starttime').val();
        $scope.edit.suitableDateEnd=angular.element('.endtime').val();
        materialSer.editMaterial($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.material.list');
                toastr.success( $scope.edit.area+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





