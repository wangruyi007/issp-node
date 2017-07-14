var app = angular.module('researchEdit', ['toastr']);
app.controller('researchEditCtrl', function($scope, researchSer,$stateParams,$state,toastr){
    var channelData ={channelId: $stateParams.id};

    //获取ID
    researchSer.findResearchId(channelData).then(function(response){
        if(response.data.code == 0){
            $scope.editResearch= response.data.data;
        }else {
            toastr.error(response.data.msg,'温馨提示')
        }

    });
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

    //编辑点击提交
    $scope.ResearchEditFun = function(){
        var vm = $scope;
        researchSer.researchEdit(vm.editResearch).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.market.marketResearch.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });

    };
});





