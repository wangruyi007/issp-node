var app = angular.module('userjopView', ['toastr']);
app.controller('userjopViewCtrl', function($scope,$state,toastr,userjopSer,$stateParams){

    var getId={id:$stateParams.id};
    userjopSer.positionuser(getId).then(function(response){
        if(response.data.code==0){
            $scope.views = response.data.data
        }else {
            toastr.error( response.data.msg , '温馨提示');
        }
    });

});





