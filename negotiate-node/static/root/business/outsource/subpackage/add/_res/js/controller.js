var app = angular.module('subpackageAdd', ['toastr']);
app.controller('subpackageAddCtrl', function($scope, subpackageSer,$state,toastr){
    //添加
    $scope.companyAddFun = function(){
        $scope.data.communicateDate = angular.element('.Time').val();//洽谈时间
        $scope.data.costBudget = Number($scope.num).toFixed(2);//项目预算
        var data = $scope.data;
        subpackageSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                if(response.data.msg){
                    toastr.success( response.data.msg, '温馨提示');
                }else{
                    $state.go('root.business.outsource.subpackage.list[12]');
                    toastr.success('添加成功', '温馨提示');
                }
            }else if(response.data.code == 1){
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




