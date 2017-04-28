var app = angular.module('competitorOrganize', ['toastr']);
app.controller('competitorOrganizeCtr',function($scope,competitorSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    $scope.organizeSmit = function(){
        var vm = $scope;
        var data = vm.editInfo;
        competitorSer.competitorOrganizeAdd(data).then(function(response){
            if(response.data.code == 0){
                toastr.success('温馨提示','添加竞争对手信息成功');
                $state.go('root.compete.competitor.list')
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }
});