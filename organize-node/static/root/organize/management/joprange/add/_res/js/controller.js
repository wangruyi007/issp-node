var app = angular.module('joprangeAdd', ['toastr']);
app.controller('joprangeAddCtrl', function($scope,$state,toastr,joprangeSer){

    $scope.joprangeAddFun=function(){
        var data={
            direction:$scope.direction,
            project:$scope.project,
            classify:$scope.classify,
            workRange:$scope.workRange,
            node:$scope.node,
        }
        joprangeSer.addJoprange(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.joprange.list');
                toastr.success( $scope.direction+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }

});





