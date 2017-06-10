var app = angular.module('descriptEdit', ['toastr']);
app.controller('descriptEditCtrl', function($scope, descriptSer,$stateParams,$state,toastr){
    var interactData ={id: $stateParams.id};

    //获取ID
    descriptSer.findDescriptId(interactData).then(function(response){
        if(response.data.code==0){
            $scope.editDescript = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.demandEditFun = function(){
        var vm = $scope;
        descriptSer.editDescript(vm.editDescript).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessInteraction.platformDescript.list');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });

    };
});





