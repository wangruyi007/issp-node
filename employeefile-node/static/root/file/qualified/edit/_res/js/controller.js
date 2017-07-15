var app = angular.module('qualifiedEdit', ['toastr']);
app.controller('qualifiedEditCtrl', function($scope, qualifiedSer,$state,toastr,$stateParams){
    var capId = {id : $stateParams.id};
    //获取值
    qualifiedSer.getOneById(capId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.quaEditFun = function(){
        var vm = $scope;
        qualifiedSer.editQualified(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.qualified.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});