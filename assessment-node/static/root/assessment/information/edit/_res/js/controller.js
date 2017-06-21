var app = angular.module('informationEdit', ['toastr']);
app.controller('informationEditCtrl', function($scope, informationSer,$stateParams,$state,toastr){
    informationSer.allInformationProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    var informData ={id: $stateParams.id};
    //获取ID
    informationSer.findInformationId(informData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.informationEditFun = function(){
        var vm = $scope;
        informationSer.editInformation(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.information.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





