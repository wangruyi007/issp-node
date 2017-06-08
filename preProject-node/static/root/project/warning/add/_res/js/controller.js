var app = angular.module('warningAdd', ['toastr']);
app.controller('warningAddCtrl', function($scope,$state,toastr,warningSer){
    $scope.warnAddFun = function(){
        warningSer.addWarning($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.warning.list');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





