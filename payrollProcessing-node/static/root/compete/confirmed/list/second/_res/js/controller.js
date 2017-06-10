var app = angular.module('confirmedSecond', ['toastr']);
app.controller('confirmedSecondCtrl',function($scope,confirmedSer,toastr,$stateParams,$state){
    //确定
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
    
            confirmedSer.confirmedSecond(data).then(function(response){
             if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.compete.confirmed.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('secondId', $scope.deledId);
                $scope.$emit('changeId', null);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    }


});
