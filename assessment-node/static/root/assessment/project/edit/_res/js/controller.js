var app = angular.module('projectEdit', ['toastr']);
app.controller('projectEditCtrl', function($scope, projectSer,$stateParams,$state,toastr){
    projectSer.allProjectPros().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    var proData ={id: $stateParams.id};
    //获取ID
    projectSer.findProjectId(proData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.proEditFun = function(){
        var vm = $scope;
        projectSer.editProject(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.project.list');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





