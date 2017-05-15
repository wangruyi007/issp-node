var app = angular.module('qualitativeList', ['toastr']);
app.controller('qualitativeListCtrl', function($scope, handleSer,$stateParams,$state,toastr){
    var handData ={id: $stateParams.id};
    //获取ID
    handleSer.findHandId(handData).then(function(response){
        if(response.data.code=='0'){
            $scope.editData = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });
    //编辑点击提交
    $scope.qualitativeEditFun = function(){
        var vm = $scope;
        handleSer.editQualitative(vm.editData).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.handle.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
    //可手填的下拉框
        $scope.changeSelect=function(){
           $scope.editData.affectDepartment = $scope.editData.affectDepartment2;
         };
       $scope.changeSelect2=function(){
        $scope.editData.affectModule = $scope.editData.affectModule2;
        };
});





