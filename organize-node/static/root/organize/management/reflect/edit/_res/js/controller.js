var app = angular.module('reflectEdit', ['toastr']);
app.controller('reflectEditCtrl', function($scope,$state,toastr,reflectSer,$stateParams){

    var getIdList={id:$stateParams.id};

    reflectSer.getReflect(getIdList).then(function(response){
        if(response.data.code==0){
            $scope.reflectData=response.data.data;
        }
    });

    $scope.reflectEditFun = function(){
        $scope.reflectData.id=$stateParams.id;
        var data = $scope.reflectData;
        reflectSer.editReflect(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.reflect.list');
                toastr.success("已成功编辑", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





