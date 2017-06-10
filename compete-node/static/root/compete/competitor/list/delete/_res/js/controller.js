var app = angular.module('competitorDelete', ['toastr']);
app.controller('competitorDeleteCtrl',function($scope,competitorSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
        competitorSer.deleteCompanyAbility(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.compete.competitor.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId)
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }


});
