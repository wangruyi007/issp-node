var app = angular.module('MaterialEdit', ['toastr']);
app.controller('MaterialEditCtrl', function($scope, MaterialSer,$stateParams,$state,toastr){
    var infoData ={id: $stateParams.id};

    //获取ID
    MaterialSer.findSourceId(infoData).then(function(response){
        if(response.data.code=='0'){
            $scope.editTender = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });

    //编辑点击提交
    $scope.tenderEditFun = function(){
        var vm = $scope;
        MaterialSer.editSource(vm.editTender).then(function(response){
            if(response.data.code == 0){
                $state.go('root.biddingManagement.tenderMaterial.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
});





