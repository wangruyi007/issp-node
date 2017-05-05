var app = angular.module('userjopAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('userjopAddCtrl', function($scope,$state,toastr,userjopSer){


    $scope.funcs = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.workOptions = ["管理员", "模块负责人",'执行层'];


    $scope.userjopAddFun = function(){
        var data={
            module:$scope.module,
            description:$scope.description
        };
        userjopSer.addUserjop(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.userjop.list');
                toastr.success( $scope.module+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    };
});





