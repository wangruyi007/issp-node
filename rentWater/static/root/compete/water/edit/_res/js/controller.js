var app = angular.module('waterEdit', ['toastr']);
app.controller('waterEditCtrl', function($scope, waterSer,$state,toastr,$stateParams,$filter){
    // 地区
    waterSer.rentArea().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
            
        }
    });
    // 项目名称
    waterSer.moneyProject().then(function(response){
        if(response.data.code == 0){
            $scope.projects = response.data.data;
            
        }
    });
    // 项目组
    waterSer.moneyGroup().then(function(response){
        if(response.data.code == 0){
            $scope.projectGroups = response.data.data;
            
        }
    });
    var waterId = {id : $stateParams.id};
    //获取值
    waterSer.waterId(waterId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.waterEditFun = function(){
        var d1 =  angular.element('.time1').val();
        var d2 =  angular.element('.time2').val();
        var t1 =  angular.element('.yon1').val();
        var t2 =  angular.element('.yon2').val();
        var data = $scope.data;
        data.waterDate=d1;
        data.waterDate=d2;
        data.waterDate=t1;
        data.waterDate=t2;
        data.submitDate=d;
        //只取两位小数
        // $scope.data.income = Number($scope.data.income).toFixed(2);
        // $scope.data.expenditure = Number($scope.data.expenditure).toFixed(2);
        waterSer.waterEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.water.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});