var app = angular.module('marketResearchAdd', ['toastr']);
app.controller('marketResearchAddCtrl', function($scope, marketResearchSer,$state,toastr){

    //年计划添加
    $scope.MiningAddFun = function(){
        var vm = $scope;
        var data = {
            type : vm.addType,
            course : vm.addCourse,
            staff : vm.addStaff,
            qualification : vm.addQualification,
            other : vm.addOther,
            remark : vm.addRemark
        };
        marketResearchSer.researchAdd(data).then(function(response){

            if(response.data.code == 0){
                $state.go('root.developProgress.market.marketResearch.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

});




