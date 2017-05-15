var app = angular.module('basicInfoDelete', ['toastr']);
app.controller('basicInfoDeleteCtrl',function($scope,basicInfoSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        };

        basicInfoSer.deleteBasicInfo(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.assessment.basicInfo.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId);
                $scope.$emit('changeId', null);
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});


