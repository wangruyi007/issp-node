var app = angular.module('area', ['toastr']);
app.controller('areaCtrl', function($scope, emailSer,toastr,$location,ipCookie){

    $scope.showed = true;
    //获取所有人
    emailSer.allgetLender().then(function(response){
        if(response.data.code == 0){
            $scope.peoples = response.data.data;
        }else if(response.data.code == 403){
            toastr.error("请联系管理员", '温馨提示');
        }
    });
    $scope.collect = function(){
        emailSer.collectLender($scope.data).then(function(response){
            if(response.data.code == 0){
                $scope.showed = false;
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});




