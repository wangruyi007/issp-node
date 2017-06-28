var app = angular.module('qualiEdit', ['toastr','ipCookie']);
app.controller('qualiEditCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams,ipCookie,$location){
    var qualiId = {id : $stateParams.suId};
    //获取值
    basicinfoSer.editQualiBasicById(qualiId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.qualiEditFun = function(){
        var vm = $scope;
        basicinfoSer.editQualiBasic(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});