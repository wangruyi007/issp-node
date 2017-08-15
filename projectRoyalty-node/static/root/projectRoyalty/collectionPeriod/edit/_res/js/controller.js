var app = angular.module('periodEdit', ['toastr']);
app.controller('periodEditCtrl', function($scope, periodSer,$stateParams,$state,toastr){
    var  periodData ={id: $stateParams.id};
    //获取ID
    periodSer.findPeriodId(periodData).then(function(response){
        if(response.data.code==0){
            $scope.editPeriods = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.periodEditFun = function(){
        periodSer.editPeriod($scope.editPeriods).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.collectionPeriod.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





