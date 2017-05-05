var app = angular.module('numberEdit', ['toastr']);
app.controller('numberEditCtrl', function($scope,$state,$stateParams,toastr,numberSer){

    var getIdList={id:$stateParams.id};

    numberSer.getNumber(getIdList).then(function(response){
        if(response.data.code==0){
            $scope.numberData=response.data.data;
        }
    });
    
    $scope.numberEditFun = function(){
        var data = $scope.numberData;
        numberSer.editNumber(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.number.list');
                toastr.success( $scope.numberData.serialNumber+"已成功编辑", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





