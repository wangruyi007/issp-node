var app = angular.module('costEdit', ['toastr']);
app.controller('costEditCtrl', function($scope,$state,$stateParams,toastr,costSer){
    costSer.allGrade().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    var getId = {id:$stateParams.id};
    costSer.getCost(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.costEditFun = function(){
        costSer.editCost($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.cost.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





