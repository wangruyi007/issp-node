var app = angular.module('basicInfoAdd', ['toastr','ipCookie']);
app.controller('basicInfoAddCtrl', function($scope, basicinfoSer,$state,toastr,ipCookie,$location){

    //添加
    $scope.basicInfoAddFun = function(){
        var vm = $scope;
        basicinfoSer.basicInfoAdd(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});




