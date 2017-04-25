var app = angular.module('researchEdit', ['toastr']);
app.controller('researchEditCtrl', function($scope, researchSer,$stateParams,$state,toastr){
    var channelData ={channelId: $stateParams.id};

    //获取ID
    researchSer.findResearchId(channelData).then(function(response){
        if(response.data.code=='0'){
            $scope.editResearch= response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });


    //编辑点击提交
    $scope.ResearchEditFun = function(){

        var vm = $scope;
        researchSer.researchEdit(vm.editResearch).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.market.marketResearch.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
});





