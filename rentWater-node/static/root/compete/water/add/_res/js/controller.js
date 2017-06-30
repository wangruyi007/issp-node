var app = angular.module('waterAdd', ['toastr']);
app.controller('waterAddCtrl', function($scope, waterSer,$state,toastr){
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
    //添加
    $scope.waterAddFun = function(){
        var d1 =  angular.element('.time1').val();
        var d2 =  angular.element('.time2').val();
        var t1 =  angular.element('.yon1').val();
        var t2 =  angular.element('.yon2').val();
        var data = $scope.data;
        data.stayStartTime=d1;
        data.stayEndTime=d2;
        data.staffVerify=t1;
        data.comprehensiveVerifySituation=t2;
        //只取两位小数
        // $scope.data.income = Number($scope.income).toFixed(2);
        // $scope.data.expenditure = Number($scope.expenditure).toFixed(2);
        //后台没写选项中的例子
        waterSer.waterAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.water.list');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});





