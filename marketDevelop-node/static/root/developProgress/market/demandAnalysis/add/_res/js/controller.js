var app = angular.module('demandAnalysisAdd', ['toastr']);
app.controller('demandAnalysisAddCtrl', function($scope, demandAnalysisSer,$state,toastr){

    //添加
    $scope.analysisAddFun = function(){
        var vm = $scope;
        var data = {
            type : vm.addType,
            course : vm.addCourse,
            target : vm.addTarget,
            orientation : vm.addOrientation,
            remark : vm.addRemark
        };
        demandAnalysisSer.addDemand(data).then(function(response){
                console.log(response);
            if(response.data.code == 0){
                $state.go('root.developProgress.market.demandAnalysis.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

});




