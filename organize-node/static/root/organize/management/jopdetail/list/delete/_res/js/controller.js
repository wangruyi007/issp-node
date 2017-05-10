var app = angular.module('jopdetailDelete', ['toastr']);
app.controller('jopdetailDeleteCtrl',function($scope,toastr,$stateParams,$state,jopdetailSer){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        }

        jopdetailSer.deleteJopdetail(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.organize.management.jopdetail.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId);
                $scope.$emit('changeId', null)
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});


