var app = angular.module('facilityEdit', ['toastr']);
app.controller('facilityEditCtrl', function($scope, facilitySer,$stateParams,$state,toastr){
    var facilityData ={id: $stateParams.id};
    //获取ID
    facilitySer.findFacilityId(facilityData).then(function(response){
        if(response.data.code==0){
            $scope.editFacilitys = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.facilityEditFun = function(){
        facilitySer.editFacility($scope.editFacilitys).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.facility.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





