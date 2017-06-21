var app = angular.module('demandEdit', ['toastr']);
app.controller('demandEditCtrl', function($scope, demandSer,$stateParams,$state,toastr){
    demandSer.allProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    var demaData ={id: $stateParams.id};
    //获取ID
    demandSer.findDemandId(demaData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.demandEditFun = function(){
        var vm = $scope;
        demandSer.editDemand(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.demand.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





