var app = angular.module('week', ['ng-pagination','toastr']);
app.controller('weekCtrl',function($scope,summarySer,toastr){


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
      }
      week(time)
    };
        function week(data){
            summarySer.listWeek(data).then(function(response){
                if(response.data.code==0){
                    $scope.listWeeks = response.data.data;
                }else{
                    toastr.error( "请求超时，请联系管理员", '温馨提示');
                }
            });
        }
    week()

})
;


