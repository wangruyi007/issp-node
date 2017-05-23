var app = angular.module('week', ['ng-pagination','toastr','ipCookie']);
app.controller('weekCtrl',function($scope,summarySer,toastr,ipCookie,$location){


    $scope.moreList = function(event){
        angular.forEach($scope.listWeeks,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    $scope.weekSum = function(){
      var time={
          startDate:angular.element('.starttime').val(),
          endDate:angular.element('.endtime').val()
      };
      week(time)
    };
        function week(data){
            summarySer.listWeek(data).then(function(response){
                if(response.data.code==0){
                    $scope.listWeeks = response.data.data;
                }else if(response.data.code==403||response.data.code==401){
                    toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                    var absurl = $location.absUrl();
                    ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                    setTimeout(function(){
                        window.location.href='http://localhost/login'
                    },2000)
                }else{
                    toastr.error( "请求超时，请联系管理员", '温馨提示');
                }
            });
        }
    week()

})
;


