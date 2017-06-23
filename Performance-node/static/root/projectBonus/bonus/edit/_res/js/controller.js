var app = angular.module('bonusEdit', ['toastr']);
app.controller('bonusEditCtrl', function($scope, bonusSer,$state,toastr,$stateParams,$filter){
    var bonusId = {id : $stateParams.id};
    //获取值
    bonusSer.bonusId(bonusId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.bonusEditFun = function(){
     
        var t1 =  angular.element('.yon1').val();
        var t2 =  angular.element('.yon2').val();
        var data = $scope.data;
     
        data.difference=t1;
        data.status=t2;
        //只取两位小数
        // $scope.data.income = Number($scope.data.income).toFixed(2);
        // $scope.data.expenditure = Number($scope.data.expenditure).toFixed(2);
        bonusSer.bonusEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectBonus.bonus.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});