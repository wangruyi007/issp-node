var app = angular.module('month', ['ng-pagination','toastr']);
app.controller('monthCtrl',function($scope,summarySer,toastr){

    $scope.moreList = function(event){
        angular.forEach($scope.listWeeks,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    $scope.monthSum = function(){
      var time={
          startDate:angular.element('.starttime').val(),
          endDate:angular.element('.endtime').val()
      }
      month(time)
    };
        function month(data){
            summarySer.listMonth(data).then(function(response){
                if(response.data.code==0){
                    $scope.listmonth = response.data.data;
                }else{
                    toastr.error( "请求超时，请联系管理员", '温馨提示');
                }
            });
        }
    month()

})
;


