var app = angular.module('rentSummary', ['toastr']);
app.controller('rentSummaryCtrl', function($scope, rentSer,toastr){

    $scope.showed=true;
    // 获取项目名称
    rentSer.rentArea().then(function(response){
        if(response.data.code == 0){
            $scope.area = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    $scope.collect = function(){
        var data = $scope;
        data.sum={
            areas:data.area
        };
        rentSer.rentSummary(data.sum).then(function(response){
            if(response.data.code == 0){
                $scope.rentLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };

});




