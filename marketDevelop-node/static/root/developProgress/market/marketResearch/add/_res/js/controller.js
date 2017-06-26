var app = angular.module('marketResearchAdd', ['toastr']);
app.controller('researchAddCtrl', function($scope, researchSer,$state,toastr){
    //获取业务类型
    researchSer.getType().then(function(response){
        if(response.data.code==0){
            $scope.types = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取业务方向科目
    researchSer.getCourse().then(function(response){
        if(response.data.code==0){
            $scope.courses = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加提交
    $scope.ResearchAddFun = function(){
        var vm = $scope;
        researchSer.researchAdd(vm.research).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.market.marketResearch.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });

    };

});




