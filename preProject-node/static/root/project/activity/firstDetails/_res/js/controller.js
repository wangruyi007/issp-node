var app = angular.module('actFirstDetails', ['toastr']);
app.controller('actFirstDetailsCtrl', function($scope,$state,$stateParams,toastr,activitySer){
    var contId = {id:$stateParams.suId};
    activitySer.collectAllDetails(contId).then(function(response){
        if(response.data.code==0){
            $scope.showInfo=response.data.data;
        }
    });
});





