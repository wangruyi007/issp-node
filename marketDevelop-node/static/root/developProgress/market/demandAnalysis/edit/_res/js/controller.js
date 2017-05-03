var app = angular.module('demandAnalysisEdit', ['toastr']);
app.controller('demandAnalysisEditCtrl', function($scope, demandAnalysisSer,$stateParams,$state,toastr){
    var demandData ={demandId: $stateParams.id};

    //获取ID
    demandAnalysisSer.findDemandId(demandData).then(function(response){
        if(response.data.code=='0'){
            $scope.editDemand = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });

    //编辑点击提交
    $scope.demandEditFun = function(){
        var vm = $scope;
        demandAnalysisSer.editDemand(vm.editDemand).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.market.demandAnalysis.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
});





