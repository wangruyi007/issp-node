var app = angular.module('motypeEdit', ['toastr']);
app.controller('motypeEditCtrl', function($scope,$state,$stateParams,toastr,motypeSer){

    var getIdList={id:$stateParams.id};

    motypeSer.getMotype(getIdList).then(function(response){
        if(response.data.code==0){
            $scope.motypeData=response.data.data;
        }
    });



    $scope.motypeEditFun = function(){
        var data = $scope.motypeData;
        motypeSer.editMotype(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.motype.list');
                toastr.success( $scope.motypeData.module+"已成功编辑", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





