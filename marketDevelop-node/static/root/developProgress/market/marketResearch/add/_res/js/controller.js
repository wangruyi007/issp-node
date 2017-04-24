var app = angular.module('marketResearchAdd', ['toastr']);
app.controller('researchAddCtrl', function($scope, researchSer,$state,toastr){

    //年计划添加
    $scope.ResearchAddFun = function(){
        var vm = $scope;
        var data = {
            type : vm.addType,
            course : vm.addCourse,
            business : vm.addBusiness,
            competitors : vm.addCompetitors,
            evaluate : vm.addEvaluate,
            remark : vm.addRemark
        };
        researchSer.researchAdd(data).then(function(response){

            if(response.data.code == 0){
                $state.go('root.developProgress.market.marketResearch.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

});




