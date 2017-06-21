var app = angular.module('punishmentEdit', ['toastr']);
app.controller('punishmentEditCtrl', function($scope, punishmentSer,$state,toastr,$stateParams,$filter){
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
    var findById = {id : $stateParams.id};
    //获取值
    punishmentSer.findById(findById).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.punishmentEditFun = function(){
        var d1 =  angular.element('.time').val();
        var data = $scope.data;
        data.occurrence=d1;
        //只取两位小数
        // $scope.data.income = Number($scope.data.income).toFixed(2);
        // $scope.data.expenditure = Number($scope.data.expenditure).toFixed(2);
        punishmentSer.edit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectBonus.punishment.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});