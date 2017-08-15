var app = angular.module('affilCompletion', ['toastr']);
app.controller('affilCompletionCtrl', function($scope, affilSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    affilSer.affilId(webData).then(function(response){
        if(response.data.code==0){
            $scope.affil = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        vm.affil.startTime = angular.element('.startTime').val();
        vm.affil.endTime = angular.element('.endTime').val();
        vm.affil.beforeTime = angular.element('.beforeTime').val();
        affilSer.affilEdit(vm.affil).then(function(response){
            if(response.data.code == 0){
                $state.go('root.insurance.affiliated.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





