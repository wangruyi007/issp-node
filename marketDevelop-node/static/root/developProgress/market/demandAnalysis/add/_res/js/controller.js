var app = angular.module('demandAnalysisAdd', ['toastr']);
app.controller('demandAnalysisAddCtrl', function($scope, demandAnalysisSer,$state,toastr){
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
    //添加
    $scope.analysisAddFun = function(){
        var vm = $scope;
        demandAnalysisSer.addDemand(vm.demand).then(function(response){
            console.log(response)
            if(response.data.code == 0){
                $state.go('root.developProgress.market.demandAnalysis.list');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });

    };

});




