var app = angular.module('punishmentSummaryReward', ['toastr']);
app.controller('punishmentSummaryRewardCtrl', function($scope, punishmentSer,toastr){

    $scope.showed=true;
    // 获取地区
    punishmentSer.rentArea().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    // 获取绩效指标
    punishmentSer.bonusStart().then(function(response){
        if(response.data.code == 0){
            $scope.targets = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    $scope.collect = function(){
        var data = $scope;
         var start =  angular.element('.start').val();
         var end =  angular.element('.end').val();
        data.sum={
            area:data.area,
            project:data.project
        };
        data.sum.start=start;
        data.sum.end=end;
        console.log(data.sum)
        punishmentSer.summary(data.sum).then(function(response){
            if(response.data.code == 0){
                $scope.punishmentLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
});