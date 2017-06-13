var app = angular.module('punishmentAdd', ['toastr']);
app.controller('punishmentAddCtrl', function($scope, punishmentSer,$state,toastr){
    // 获取绩效指标
    punishmentSer.bonusStart().then(function(response){
        if(response.data.code == 0){
            $scope.names = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    // 姓名
    punishmentSer.rentName().then(function(response){
        if(response.data.code == 0){
            $scope.usernames = response.data.data;
        }
    });
    //添加
    $scope.punishmentAddFun = function(){
        var d1 =  angular.element('.time1').val();
        var data = $scope.data;
        data.occurrence=d1;
        //只取两位小数
        // $scope.data.income = Number($scope.income).toFixed(2);
        // $scope.data.expenditure = Number($scope.expenditure).toFixed(2);
        //后台没写选项中的例子
        punishmentSer.punishmentAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectBonus.punishment.list');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});





