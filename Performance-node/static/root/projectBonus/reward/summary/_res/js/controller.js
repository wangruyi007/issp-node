
var app = angular.module('rewardSummary', ['toastr']);
app.controller('rewardSummaryCtrl', function($scope, rewardSer,toastr){

    $scope.showed=true;
    // 获取项目名称
    rewardSer.rentArea().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    // 获取项目名称
    rewardSer.moneyProject().then(function(response){
        if(response.data.code == 0){
            $scope.projects = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    $scope.all = function(){
        var data = $scope;
         var start =  angular.element('.start').val();
         var end =  angular.element('.end').val();
        data.sum={
            area:data.area,
            project:data.project
        };
        data.sum.start=start;
        data.sum.end=end;
        rewardSer.rewardAllReward(data.sum).then(function(response){
            if(response.data.code == 0){
                $scope.rewardLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
    $scope.one = function(){
        var data = $scope;
         var start =  angular.element('.start').val();
         var end =  angular.element('.end').val();
        data.sum={
            area:data.area,
            project:data.project
        };
        data.sum.start=start;
        data.sum.end=end;
        rewardSer.rewardOneReward(data.sum).then(function(response){
            if(response.data.code == 0){
                $scope.rewardLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
});




