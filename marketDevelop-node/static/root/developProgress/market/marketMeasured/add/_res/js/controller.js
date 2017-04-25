var app = angular.module('measuredAdd', ['toastr']);
app.controller('measuredAddCtrl', function($scope, measuredSer,$state,toastr){

    //添加
    $scope.measuredAddFun = function(){
        var vm = $scope;
        measuredSer.measuredAdd(vm.measured).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.market.marketMeasured.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

});




