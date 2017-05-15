var app = angular.module('summaryEdit', ['toastr']);
app.controller('summaryEditCtrl', function($scope,$state,$stateParams,toastr,summarySer){

    var getId = {id:$stateParams.id};
    summarySer.getBasicinfo(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.basicEditFun = function(){
        $scope.edit.startTime=angular.element('.starttime').val();
        $scope.edit.endTime=angular.element('.endtime').val();
        summarySer.editBasicinfo($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.finance.summary.list');
                toastr.success( $scope.edit.area+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





