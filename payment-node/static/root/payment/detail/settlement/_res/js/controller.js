var app = angular.module('settlement', ['toastr']);
app.controller('settlementCtrl', function($scope, detailSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
    //获取ID
    detailSer.findDetailId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.settleInfo = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
      /*  $scope.data = {
        group: '',
        progress: ''
    };
        $scope.groups = [
            {id: 1, name: 'A1', progress:[{id: 1, name: '工程督导和网优单位站点准备'},]},
            {id: 2, name: 'A2', progress: [{id: 1, name: '结算站点核对会审'}]}
        ];
        $scope.myFunc = function(){
            $scope.lists = $scope.groups.filter(function(group){
                return group.id == $scope.group;
            })[0].progress;
        };*/
    //编辑点击提交
    $scope.settlementEditFun = function(){
        var vm = $scope;
        var data ={
            id:vm.settleInfo.id,
            group:vm.group,
            progress:vm.progress,
        };
        detailSer.listNameGroup(data).then(function(response){
            console.log(data);
            if(response.data.code == 0){
                $state.go('root.payment.detail.list');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    };
});





