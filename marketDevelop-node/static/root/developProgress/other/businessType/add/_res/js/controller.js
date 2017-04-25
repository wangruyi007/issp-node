var app = angular.module('businessTypeAdd', ['toastr']);
app.controller('typeAddCtrl', function($scope, businessTypeSer,$state,toastr){

    //添加
    $scope.typeAddFun = function(){
        var vm = $scope;
        businessTypeSer.businessTypeAdd(vm.typeAdd).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.other.businessType.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

});




