var app = angular.module('recomIdeaZ', ['toastr']);
app.controller('recomIdeaZCtrl', function($scope, recomSer,$stateParams,$state,toastr){
    var infoData ={id: $stateParams.id};
    $scope.showed=true
    recomSer.gitLevel().then(function(response){
        if(response.data.code == 0){
            $scope.rotationLevelIds = response.data.data;
        }
    });
    //获取ID
    recomSer.recomId(infoData).then(function(response){
        if(response.data.code == 0){
            $scope.recom = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //点击提交
    $scope.recomEditFun = function(){
        var vm = $scope;
        vm.recom.biddingNumber = angular.element('.num').val();
        vm.recom.projectName = angular.element('.na').val();
        recomSer.recomIdeaZ(vm.recom).then(function(response){
            if(response.data.code == 0){
                $state.go('root.rotation.recommended.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





