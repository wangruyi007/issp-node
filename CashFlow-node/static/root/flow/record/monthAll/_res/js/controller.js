var app = angular.module('recordMonthAll', ['toastr']);
app.controller('recordMonthAllCtrl', function($scope, recordSer,toastr){

$scope.months=['1','2','3','4','5','6','7','8','9','10','11','12']
        
    //查询事件
    $scope.collect = function(){

        var data = $scope;
        data.sum={
            year:data.year,
            month:data.month,
        };
        recordSer.moneyMonthAll(data.sum).then(function(response){
            
            if(response.data.code == 0){
                $scope.recordLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});




