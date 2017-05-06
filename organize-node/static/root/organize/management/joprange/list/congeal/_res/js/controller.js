var app = angular.module('joprangeCongeal', ['toastr']);
app.controller('joprangeCongealCtrl',function($scope,toastr,$stateParams,$state,joprangeSer){

    $scope.congealYes = function(){

        var data = {
            id :$stateParams.id
        }
        joprangeSer.congealJoprange(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $state.go('root.organize.management.joprange.list');
                //向父Ctrl传递事件
                $scope.$emit('congealdId', $scope.deledId);
                $scope.$emit('changeId', null)
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});


