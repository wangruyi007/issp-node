var app = angular.module('materialCollect', ['toastr']);
app.controller('materialCollectCtrl', function($scope,$state,toastr,materialSer){

    $scope.collect = function(){
        var vm = $scope;
        var data={
            area:vm.area,
            customerName:vm.customerName,
            startDate:angular.element('.starttime').val(),
            endDate:angular.element('.endtime').val()
        };
        materialSer.collectMaterial(data).then(function(response){
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }else if(response.data.code == 0&& !response.data.data){
                toastr.error( "汇总信息不存在", '温馨提示');
            }
        });
    };
});





