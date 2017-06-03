var app = angular.module('departmentView', ['toastr','ipCookie']);
app.controller('departmentViewCtrl', function($scope,$state,toastr,departSer,$stateParams){

    var getId={id:$stateParams.id};
    departSer.viewRange(getId).then(function(response){
       if(response.data.code==0){
           $scope.viewLists = response.data.data
       }else {
           toastr.error( response.data.msg, '温馨提示');
       }

    });


});





