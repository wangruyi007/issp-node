var app = angular.module('competitorArganize', ['toastr']);
app.controller('mExecutiveOpinionCtr',function($scope,marketserveSer,$state,toastr,$stateParams){
    var EditId = {id : $stateParams.id};
    //获取值
    marketserveSer.getOneById(EditId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    $scope.Smit = function(){
        var vm = $scope;
        var data = $scope.data;
        data.id = EditId.id;
        marketserveSer.executiveOpinionEidt(data).then(function(response){
            if(response.data.code == 0){
                toastr.success('温馨提示','编辑资金模块意见成功');
                $state.go('root.marketActivity.marketserve.list')
            }else{
                toastr.error(response.data.msg ,'温馨提示');
            }
        })
    }
});
app.filter('chinese',function(){
    return function(val){
        var result;
        switch(val){
            case 'ALLOWED':
            result = '通过';
            break;
            case 'NONE':
            result = '未通过';
            break;
            case 'DENIED':
            result = '拒绝';
            break;
        }
        return result;
    }
})