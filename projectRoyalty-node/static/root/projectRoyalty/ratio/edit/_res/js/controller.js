var app = angular.module('ratioEdit', ['toastr']);
app.controller('ratioEditCtrl', function($scope, ratioSer,$stateParams,$state,toastr){
    var ratioData ={id: $stateParams.id};
    //获取ID
    ratioSer.findRatioId(ratioData).then(function(response){
        if(response.data.code==0){
            $scope.editRatios = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.ratioEditFun = function(){
        ratioSer.editRatio($scope.editRatios).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectRoyalty.ratio.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





