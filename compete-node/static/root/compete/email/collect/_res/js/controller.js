var app = angular.module('area', ['toastr']);
app.controller('emailcollectCtrl', function($scope, emailSer,toastr,$location,ipCookie){

    
    emailSer.allCollect($scope.data).then(function(response){
        if(response.data.code == 0){
            $scope.showed = false;
            $scope.summaryLists = response.data.data;
        }else{
             toastr.error( response.data.msg, '温馨提示');
        }
    })

});




