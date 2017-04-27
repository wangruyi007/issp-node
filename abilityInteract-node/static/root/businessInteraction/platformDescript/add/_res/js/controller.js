var app = angular.module('descriptAdd', ['toastr']);
app.controller('descriptAddCtrl', function($scope, descriptSer,$state,toastr){

    //添加
    $scope.demandAddFun = function(){
        var vm = $scope;

        descriptSer.addDescript(vm.demand).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessInteraction.platformDescript.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

});




