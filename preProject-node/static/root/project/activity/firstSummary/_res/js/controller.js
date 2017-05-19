var app = angular.module('activityFirstSummary', ['toastr']);
app.controller('activityFirstSummaryCtrl', function($scope,$state,toastr,activitySer){
    $scope.collect = function(){
        var data = {
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val()
        };
        activitySer.summaryFirst(data).then(function(response){
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }else if(response.data.code == 0&& !response.data.data){
                toastr.error( "汇总信息不存在", '温馨提示');
            }
        });
    };
    //选择
    $scope.$emit('changeSocialListId', null);
    $scope.selectList = function(event){
        angular.forEach($scope.summaryLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idSocialList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeSocialListId',$scope.idSocialList);
    };
});





