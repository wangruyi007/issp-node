var app = angular.module('detailToview', ['toastr']);
app.controller('detailToviewCtrl', function($scope, detailSer, $stateParams,$location){

    var cusNum = {customerNum : $stateParams.cusNum};

    detailSer.getInfoByCustomerNum(cusNum).then(function(response){
        if(response.data.code==0){
            $scope.details = response.data.data;
        }
    });



    $scope.tab={
        current: "_basic"
    }
    $scope.boardBtn=function(name){
        $scope.tab.current = name;
    }



});





