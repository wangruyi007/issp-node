var app = angular.module('systemEdit', ['toastr']);
app.controller('systemEditCtrl', function($scope,$state,$stateParams,toastr,systemSer){
    var getIdList={id:$stateParams.id};

    systemSer.getSystem(getIdList).then(function(response){
        if(response.data.code==0){
            $scope.ststemData=response.data.data;
        }
    });

    $scope.systemEditFun = function(){
        $scope.ststemData.id=$stateParams.id;
        var data = $scope.ststemData;
        systemSer.editSystem(data).then(function(response){
            console.info(response);
            if(response.data.code == 0){
                $state.go('root.organize.management.system.list');
                toastr.success( $scope.ststemData.serialNumber+"已成功编辑", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





