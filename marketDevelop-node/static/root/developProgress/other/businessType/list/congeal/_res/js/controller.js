var app = angular.module('typeCongeal', ['toastr']);
app.controller('typeCongealCtrl',function($scope,businessTypeSer,toastr,$stateParams,$state){
    //冻结
    $scope.congealYes = function(){

        var data = {
            id :$stateParams.id
        }
        businessTypeSer.congealType(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $state.go('root.developProgress.other.businessType.list');
                $scope.conId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('congealId', $scope.conId)
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});


