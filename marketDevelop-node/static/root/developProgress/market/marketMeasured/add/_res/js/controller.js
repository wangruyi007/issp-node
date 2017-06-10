var app = angular.module('measuredAdd', ['toastr']);
app.controller('measuredAddCtrl', function($scope, measuredSer,$state,toastr){
    //获取业务类型
    measuredSer.getType().then(function(response){
        if(response.data.code==0){
            $scope.types = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取业务方向科目
    measuredSer.getCourse().then(function(response){
        if(response.data.code==0){
            $scope.courses = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.measuredAddFun = function(){
        var vm = $scope;
        measuredSer.measuredAdd(vm.measured).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.market.marketMeasured.list');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });

    };

});




