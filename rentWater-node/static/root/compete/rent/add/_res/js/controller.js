var app = angular.module('rentAdd', ['toastr']);
app.controller('rentAddCtrl', function($scope, rentSer,$state,toastr){
    // 地区
    rentSer.rentArea().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }
    });
    // 项目名称
    rentSer.moneyProject().then(function(response){
        if(response.data.code == 0){
            $scope.projectNames = response.data.data;
        }
    });
    // 项目组
    rentSer.moneyGroup().then(function(response){
        if(response.data.code == 0){
            $scope.projectGroups = response.data.data;
        }
    });
    //添加
    $scope.rentAddFun = function(){
        var data = $scope.data;
        var d1 =  angular.element('.time1').val();
        var d2 =  angular.element('.time2').val();
        var d3 =  angular.element('.time3').val();
        var d4 =  angular.element('.time4').val();
        var d5 =  angular.element('.time5').val();
        var d6 =  angular.element('.time6').val();
        var d7 =  angular.element('.time7').val();
        var d8 =  angular.element('.time8').val();
        var d9 =  angular.element('.time9').val();
        var d10 =  angular.element('.time10').val();
        var d11 =  angular.element('.time11').val();
        var t1 =  angular.element('.yon1').val();
        var t2 =  angular.element('.yon2').val();
        data.operatingPay=t1;
        data.rentMoneyMail=t2;
        data.payDate=d1;
        data.rentDate=d2;
        data.paymentDate=d3;
        data.rentStartTime=d4;
        data.rentEndTime=d5;
        data.waterStartTime=d6;
        data.waterEndTime=d7;
        data.energyStartTime=d8;
        data.energyEndTime=d9;
        data.gasStartTime=d10;
        data.gasEndTime=d11;
        //只取两位小数
        // $scope.data.income = Number($scope.income).toFixed(2);
        // $scope.data.expenditure = Number($scope.expenditure).toFixed(2);
        //后台没写选项中的例子
        rentSer.rentAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.rent.list');
                toastr.success( "成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});





