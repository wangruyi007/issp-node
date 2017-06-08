var app = angular.module('rationList', ['toastr']);
app.controller('rationListCtrl', function($scope, handleSer,$stateParams,$state,toastr){
    var handData ={id: $stateParams.id};
    //获取ID
    handleSer.findHandId(handData).then(function(response){
        if(response.data.code=='0'){
            $scope.editData = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.rationEditFun = function(){
        var vm = $scope;
        handleSer.editRation(vm.editData).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.handle.list');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





