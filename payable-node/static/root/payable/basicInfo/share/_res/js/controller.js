var app = angular.module('basicInfoShare', ['toastr']);
app.controller('basicInfoShareCtrl', function($scope, basicInfoSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
    //获取ID
    basicInfoSer.findInfoId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.shareInfo = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });
    //编辑点击提交
    $scope.basicInfoEditFun = function(){
        var vm = $scope;
        vm.shareInfo.taxDate = angular.element('.taxDate').val();
        basicInfoSer.editShareBasicInfo(vm.shareInfo).then(function(response){
            console.log(response)
            if(response.data.code == 0){
                $state.go('root.payable.basicInfo.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
    $scope.changeSelect=function(){
        $scope.shareInfo.project = $scope.shareInfo.project2;
    };
});





