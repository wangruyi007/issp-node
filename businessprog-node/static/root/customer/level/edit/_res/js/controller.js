var app = angular.module('levelEdit', ['toastr']);
app.controller('levelEditCtrl', function($scope, levelSer, $state, toastr, $stateParams){

    var nameLevel = {name : $stateParams.nameLevel};

    levelSer.getCustomerLevel(nameLevel).then(function(response){
        $scope.levelInfo = response.data.data
    })
    $scope.editLevel = function(){
        var vm = $scope;
        var data = {
            id:vm.levelInfo.id,
            name : vm.levelInfo.name,
            remark : vm.levelInfo.remark
        }
        levelSer.editLevel(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.customer.level.list');
                toastr.success("已编辑成功", '温馨提示');
            } else if(response.data.code == 403){
                toastr.error("请登录用户", '温馨提示');
            }
        })
    };


});





