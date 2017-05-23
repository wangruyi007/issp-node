var app = angular.module('costDetailGroup', ['toastr']);
app.controller('costDetailGroupCtrl', function($scope,$state,$stateParams,toastr,costSer){
    var contId = {id:$stateParams.suId};
    costSer.collectAreaDetails(contId).then(function(response){
        if(response.data.code==0){
            $scope.showInfo=response.data.data;
        }
    });
    $scope.moreList = function(event){
        angular.forEach($scope.costLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
});





