var app = angular.module('typeEdit', ['toastr']);
app.controller('typeEditCtrl', function($scope, businessTypeSer,$stateParams,$state,toastr){
    var typeData ={typeId: $stateParams.id};

    //获取ID
    businessTypeSer.findTypeId(typeData).then(function(response){
        if(response.data.code==0){
            $scope.editType = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.typeEditFun = function(){
        var vm = $scope;
        businessTypeSer.businessTypeEdit(vm.editType).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.other.businessType.list');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





