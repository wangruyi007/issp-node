var app = angular.module('basicInfoTax', ['toastr']);
app.controller('basicInfoTaxCtrl', function($scope,$state,toastr,basicInfoSer){
//查询所有税种
    basicInfoSer.listResultTax().then(function(response){
          if(response.data.code == 0){
            $scope.taxdata = response.data.data;
          }else{
              toastr.error(response.data.msg, '温馨提示');
          }
    });
    $scope.collect = function(){
        var data = {
            taxType: $scope.taxType,
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val()
        };
        basicInfoSer.summaryTax(data).then(function(response){
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
//无参数传入
    basicInfoSer.summaryTax().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
});


