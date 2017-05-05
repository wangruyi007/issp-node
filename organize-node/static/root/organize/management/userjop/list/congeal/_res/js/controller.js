var app = angular.module('userjopCongeal', ['toastr']);
app.controller('userjopCongealCtrl',function($scope,toastr,$stateParams,$state){
    //删除
    $scope.congealYes = function(){

        var data = {
            id :$stateParams.id
        }
        // basicinfoSer.congealCustomerbaseinfo(data).then(function(response){
        //     if(response.data.code==0){
        //         toastr.info( "信息已冻结", '温馨提示');
        //         $state.go('root.customer.basicinfo.list');
        //         $scope.conId = $stateParams.id;
        //         //向父Ctrl传递事件
        //         $scope.$emit('congealId', $scope.conId)
        //     }else if(response.data.code==403){
        //         toastr.error( "请登录用户", '温馨提示');
        //     }
        // })
    }


});


