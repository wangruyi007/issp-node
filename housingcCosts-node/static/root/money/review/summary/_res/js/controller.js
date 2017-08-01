
var app = angular.module('summary', ['toastr']);
app.controller('summaryCtrl', function($scope, reviewSer,toastr){
$scope.months=['1','2','3','4','5','6','7','8','9','10','11','12']
    $scope.showed=true;
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            month:$scope.month
        };
        reviewSer.summaryReview(vm.sum.month).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});





