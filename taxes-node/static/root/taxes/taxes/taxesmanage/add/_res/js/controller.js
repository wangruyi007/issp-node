/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('messageAdd', ['toastr']);
app.controller('taxesmanageAddCtrl', function($scope, taxesmanageSer,$state,toastr){

    //添加
    $scope.AddFun = function(){
        var data = $scope.data;
        $scope.data.month = angular.element('.month').val();//月份
        $scope.data.paymentDate = angular.element('.payTime').val();//付款日期
        taxesmanageSer.addData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.taxes.taxes.taxesmanage.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
    
});



