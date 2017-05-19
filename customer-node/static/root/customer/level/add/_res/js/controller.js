var app = angular.module('levelAdd', ['toastr']);
app.controller('levelAddCtrl', function($scope, levelSer, $state, toastr){

    $scope.addLevel = function(){
        var vm = $scope;
        var data = {
            name : vm.addLevelName,
            remark : vm.addLevelRemark
        }

        levelSer.addCustomerLevel(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.customer.level.list');
                toastr.success("已成功添加", '温馨提示');
            } else if(response.data.code == 403){
                toastr.error("请登录用户", '温馨提示');
            }
        });

    }

});





