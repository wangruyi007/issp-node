var app = angular.module('targetInfoAdd', ['toastr']);
app.controller('targetInfoAddCtrl', function($scope, targetInfoSer,$state,toastr){
    //获取地区
    targetInfoSer.getArea().then(function(response){
        if(response.data.code==0){
            $scope.areas = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取业务类型
    targetInfoSer.getType().then(function(response){
        if(response.data.code==0){
            $scope.types = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取业务方向科目
    targetInfoSer.getCourse().then(function(response){
        if(response.data.code==0){
            $scope.courses = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.targetAddFun = function(){
        var vm = $scope;
        targetInfoSer.addTargetInfo(vm.targetInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.market.targetInfo.list');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });

    };

});




