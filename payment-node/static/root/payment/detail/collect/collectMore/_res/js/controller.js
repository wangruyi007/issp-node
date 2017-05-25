var app = angular.module('detailCollectMore', ['toastr']);
app.controller('detailCollectMoreCtrl', function($scope, detailSer,toastr,$stateParams){
    var dataId = {
        id :$stateParams.suId
    };
    detailSer.listDetails(dataId).then(function(response){
        if(response.data.code==0){
            $scope.detailListfs = response.data
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.detailListfs,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
       });
        event._moreList = !event._moreList;
    };
});



