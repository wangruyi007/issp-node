var app = angular.module('demandAnalysisEdit', ['toastr']);
app.controller('demandAnalysisEditCtrl', function($scope, demandAnalysisSer,$stateParams,$state,toastr){
    var demandData ={demandId: $stateParams.id};

    //获取ID
    demandAnalysisSer.findDemandId(demandData).then(function(response){
        if(response.data.code=='0'){
            $scope.editDemand = response.data.data;
        }else {
            toastr.error(response.data.msg,'温馨提示')
        }

    });
    //获取业务类型
    demandAnalysisSer.getType().then(function(response){
        if(response.data.code==0){
            $scope.types = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取业务方向科目
    demandAnalysisSer.getCourse().then(function(response){
        if(response.data.code==0){
            $scope.courses = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.demandEditFun = function(){
        var vm = $scope;
        demandAnalysisSer.editDemand(vm.editDemand).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.market.demandAnalysis.list');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });

    };
});





