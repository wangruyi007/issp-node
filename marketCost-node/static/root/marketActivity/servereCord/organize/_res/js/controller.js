var app = angular.module('competitorOrganize', ['toastr']);
app.controller('servereCordOrganizeCtr',function($scope,servereCordSer,$state,toastr,$stateParams){
    var EditId = {id : $stateParams.id};
    //获取值
    servereCordSer.getOneById(EditId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    $scope.organizeSmit = function(){
        var vm = $scope;
        var data = $scope.data;
        servereCordSer.fundModuleOpinionEidt(data).then(function(response){
            if(response.data.code == 0){
                toastr.success('温馨提示','资金模块审核成功');
                $state.go('root.marketActivity.servereCord.list')
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }
});