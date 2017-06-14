var app = angular.module('rewardAdd', ['toastr']);
app.controller('rewardAddCtrl', function($scope, rewardSer,$state,toastr){
    // 获取绩效指标
    rewardSer.bonusStart().then(function(response){
        if(response.data.code == 0){
            $scope.names = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    // 姓名
    rewardSer.rentName().then(function(response){
        if(response.data.code == 0){
            $scope.usernames = response.data.data;
        }
    });
    //添加
    $scope.rewardAddFun = function(){
        var d1 =  angular.element('.time1').val();
        var data = $scope.data;
        data.occurrence=d1;
        //只取两位小数
        // $scope.data.income = Number($scope.income).toFixed(2);
        // $scope.data.expenditure = Number($scope.expenditure).toFixed(2);
        rewardSer.rewardAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectBonus.reward.list');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});





