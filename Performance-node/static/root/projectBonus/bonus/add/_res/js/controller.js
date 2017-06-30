var app = angular.module('bonusAdd', ['toastr']);
app.controller('bonusAddCtrl', function($scope, bonusSer,$state,toastr){
    //添加
    $scope.bonusAddFun = function(){
        var t1 =  angular.element('.yon1').val();
        var t2 =  angular.element('.yon2').val();
        var data = $scope.data;
        data.difference=t1;
        data.status=t2;
        //只取两位小数
        // $scope.data.income = Number($scope.income).toFixed(2);
        // $scope.data.expenditure = Number($scope.expenditure).toFixed(2);
        //后台没写选项中的例子
        bonusSer.bonusAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectBonus.bonus.list');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});





