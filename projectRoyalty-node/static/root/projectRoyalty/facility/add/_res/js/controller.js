var app = angular.module('facilityAdd', ['toastr']);
app.controller('facilityAddCtrl', function($scope,facilitySer,$state,toastr){
    //添加
    $scope.facilityAddFun = function(){
        var vm = $scope;
        facilitySer.addFacility(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.facility.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




