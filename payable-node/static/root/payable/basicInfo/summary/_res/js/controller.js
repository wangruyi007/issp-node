var app = angular.module('basicInfoSummary', ['toastr']);
app.controller('basicInfoSummaryCtrl', function($scope,$state,toastr,basicInfoSer){
    //查询所有公司名
    basicInfoSer.listResultCompany().then(function(response){
          if(response.data.code == 0){
            $scope.companydata = response.data.data;
          }
    });
    $scope.collect = function(){
        var data = {
            company: $scope.company,
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val()
        };
        basicInfoSer.summaryCompany(data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }else if(response.data.code == 0&& !response.data.data){
                toastr.error( "汇总信息不存在", '温馨提示');
            }
        });
    };
//无参数传入
    basicInfoSer.summaryCompany().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data
        }else if(response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }else if(response.data.code == 0&& !response.data.data){
            toastr.error( "汇总信息不存在", '温馨提示');
        }
    })
});



app.filter('cover', function(){
 return function (val) {
 var result;
 switch(val) {
 case "无":
 result = "";
 break;
 }
 return result;
 }
 });

