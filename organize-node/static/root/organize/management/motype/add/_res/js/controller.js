var app = angular.module('motypeAdd', ['toastr']);
app.controller('motypeAddCtrl', function($scope,$state,toastr,motypeSer){


    $scope.motypeAddFun = function(){
        var data={
            module:$scope.module,
            description:$scope.description
        };
        motypeSer.addMotype(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.motype.list');
                toastr.success( $scope.module+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }

        })
    };


});





