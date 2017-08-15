var app = angular.module('ssuiAdd', ['toastr']);
app.controller('ssuiAddCtrl', function($scope, ssuiSer,$state,toastr){
    //添加
    $scope.companyAddFun = function(){
         $scope.data.communicateDate = angular.element('.Time').val();//洽谈时间
         $scope.data.costBudget = Number($scope.num).toFixed(2);//项目预算
        var data = $scope.data;
        ssuiSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.business.contract.ssui.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //控制数字不能小于1
    $scope.changeNum =function(){
        if($scope.data.predictAttendNo < 1){
            $scope.data.predictAttendNo = 1;
        }
    }
});




