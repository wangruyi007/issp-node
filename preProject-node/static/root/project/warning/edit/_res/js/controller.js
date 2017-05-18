var app = angular.module('warningEdit', ['toastr']);
app.controller('warningEditCtrl', function($scope,$state,$stateParams,toastr,warningSer){

    var getId = {id:$stateParams.id};
    warningSer.getWarning(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.warnEditFun = function(){
        warningSer.editWarning($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.warning.list');
                toastr.success( $scope.edit.area+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





