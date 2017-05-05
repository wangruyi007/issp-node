var app = angular.module('dimenEdit', ['toastr']);
app.controller('dimenEditCtrl', function($scope,$state,toastr,$stateParams,dimensionSer){

    var dimensionData ={id: $stateParams.id};
    dimensionSer.getDimension(dimensionData).then(function(response){
        if(response.data.code == 0){
            $scope.editDimension = response.data.data
        }
    });

    //提交编辑
    $scope.dimensionAddFun = function(){
        var vm = $scope;
        dimensionSer.editDimension(vm.editDimension).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.dimen.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





