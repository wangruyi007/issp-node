var app = angular.module('competitorOrganize', ['toastr']);
app.controller('competitorOrganizeCtr',function($scope,competitorSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};

    competitorSer.getOneById(companyId).then(function(response){
            if(response.data.code==0){
                $scope.editInfo = response.data.data;
            }
        });
    $scope.organizeSmit = function(){
        var vm = $scope;
        var data = vm.editInfo;
        competitorSer.competitorOrganizeAdd(data).then(function(response){
            if(response.data.code == 0){
                toastr.success('温馨提示','添加成功');
                $state.go('root.compete.competitor.list')
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
});