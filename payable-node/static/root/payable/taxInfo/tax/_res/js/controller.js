var app = angular.module('taxInfoSummaryTax', ['toastr','ipCookie']);
app.controller('taxInfoSummaryTaxCtrl', function($scope,$state,toastr,taxInfoSer,ipCookie,$location){
    //查询所有税种
    taxInfoSer.listResultProjectTax().then(function(response){
          if(response.data.code == 0){
            $scope.taxdata = response.data.data;
          }
    });
    $scope.collect = function(){
        var data = {
            taxType: $scope.taxType,
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val()
        };
        taxInfoSer.projectTax(data).then(function(response){
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }else if(response.data.code == 0&& !response.data.data){
                toastr.error( "汇总信息不存在", '温馨提示');
            }
        });
    };
//无参数传入
    taxInfoSer.projectTax().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data
        }else if (response.data.code == 403||response.data.code == 401) {
            toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
            var absurl = $location.absUrl();
            ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
            setTimeout(function(){
                window.location.href='http://localhost/login'
            },3000)
        }else if(response.data.code == 0&& !response.data.data){
            toastr.error( "汇总信息不存在", '温馨提示');
        }
    })
});


