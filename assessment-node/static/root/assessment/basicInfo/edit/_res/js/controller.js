var app = angular.module('basicInfoEdit', ['toastr']);
app.controller('basicInfoEditCtrl', function($scope, basicInfoSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};

    //获取ID
    basicInfoSer.findInfoId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });
    //编辑点击提交
    $scope.basicInfoEditFun = function(){
        var vm = $scope;
        vm.editInfo.startTime = angular.element('.startTime').val();
        vm.editInfo.endTime = angular.element('.endTime').val();
        basicInfoSer.editBasicInfo(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.basicInfo.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
    $scope.changeSelect=function(){
        $scope.editInfo.area = $scope.editInfo.area2;
    };
    $scope.changeSelect2=function(){
        $scope.editInfo.project = $scope.editInfo.project2;
    };
});





