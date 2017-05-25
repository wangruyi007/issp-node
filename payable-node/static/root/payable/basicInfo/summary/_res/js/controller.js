var app = angular.module('basicInfoSummary', ['toastr','ipCookie']);
app.controller('basicInfoSummaryCtrl', function($scope,$state,toastr,basicInfoSer,ipCookie,$location){
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
        });
    };
//无参数传入
    basicInfoSer.summaryCompany().then(function(response){
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

