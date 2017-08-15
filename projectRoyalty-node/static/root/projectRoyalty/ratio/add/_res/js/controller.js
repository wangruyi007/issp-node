var app = angular.module('ratioAdd', ['toastr']);
app.controller('ratioAddCtrl', function($scope, ratioSer,$state,toastr){
    //添加
    $scope.ratioAddFun = function(){
        var vm = $scope;
        ratioSer.addRatio(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.ratio.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




