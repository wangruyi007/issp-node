var app = angular.module('profitList', ['ng-pagination','toastr']);
app.controller('profitListCtrl',function($scope,profitSer,toastr){
    $scope.$emit('changeId', null);
    $scope.teamInfo = {};
    $scope.selectList = function(event){
        angular.forEach($scope.otherLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.otherLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    profitSer.listProfit().then(function(response){
        if(response.data.code==0){
            $scope.profitLists = response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});

