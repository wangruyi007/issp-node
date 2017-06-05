var app = angular.module('labourEdit', ['toastr']);
app.controller('labourEditCtrl', function($scope, labourSer,$stateParams,$state,toastr){
    labourSer.allLabourProjects().then(function(response){
        if(response.data.code == 0){
            $scope.labData = response.data.data;
        }
    });
    var labData ={id: $stateParams.id};
    //获取ID
    labourSer.findLabourId(labData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.labourEditFun = function(){
        var vm = $scope;
        labourSer.editLabour(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.labour.list');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





