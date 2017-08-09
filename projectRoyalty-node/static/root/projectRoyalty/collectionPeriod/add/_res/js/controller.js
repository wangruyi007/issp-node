var app = angular.module('periodAdd', ['toastr']);
app.controller('periodAddCtrl', function($scope,periodSer,$state,toastr){
    //添加
    $scope.periodAddFun = function(){
        var vm = $scope;
        periodSer.addPeriod(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.collectionPeriod.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




