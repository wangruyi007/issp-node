var app = angular.module('warningDelete', ['toastr']);
app.controller('warningDeleteCtrl',function($scope,toastr,$stateParams,$state,warningSer){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
        warningSer.deleteWarning(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.budget.warning.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId);
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});


