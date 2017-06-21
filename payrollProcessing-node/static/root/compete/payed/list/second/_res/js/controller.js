var app = angular.module('payedSecond', ['toastr']);
app.controller('payedSecondCtrl',function($scope,payedSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
    
            payedSer.payedSecond(data).then(function(response){
             if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.compete.payed.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('seconddId', $scope.deledId);
                $scope.$emit('changeId', null);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    }


});
