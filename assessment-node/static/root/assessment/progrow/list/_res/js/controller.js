var app = angular.module('progrowList', ['ng-pagination','toastr']);
app.controller('progrowListCtrl',function($scope,progrowSer,toastr){
    $scope.$emit('changeId', null);
    $scope.teamInfo = {};
    $scope.selectList = function(event){
        angular.forEach($scope.progrowLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.progrowLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    progrowSer.listProGrow().then(function(response){
        if(response.data.code==0){
            $scope.progrowLists = response.data.data
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
});

