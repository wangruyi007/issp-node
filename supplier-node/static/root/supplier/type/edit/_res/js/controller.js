var app = angular.module('typeEdit', ['toastr','ipCookie']);
app.controller('typeEditCtrl', function($scope, typeSer,$stateParams,$state,toastr,ipCookie,$location){
    var editData ={id: $stateParams.id};

    //获取ID
    typeSer.getEditTypeById(editData).then(function(response){
        if(response.data.code=='0'){
            $scope.editTypeBasic = response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.typeEditFun = function(){
        var vm = $scope;
        typeSer.editType(vm.editTypeBasic).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.type.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error(  response.data.msg, '温馨提示');
            }
        });

    };
});





