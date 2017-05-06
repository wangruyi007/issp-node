var app = angular.module('basicInfoAdd', ['toastr']);
app.controller('basicInfoAddCtrl', function($scope, basicinfoSer,$state,toastr){

    //添加
    $scope.basicInfoAddFun = function(){
        var vm = $scope;
        basicinfoSer.basicInfoAdd(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
    $scope.changeSelect=function(){
        $scope.add.area = $scope.add.area2;
    };
});




