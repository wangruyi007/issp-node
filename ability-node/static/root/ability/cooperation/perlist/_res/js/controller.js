var app = angular.module('cooperationAbi', ['toastr']);
app.controller('cooperationAbiCtrl', function($scope, cooperationSer,$state,toastr,$stateParams){
   var coopId = {id : $stateParams.id,};
    //获取值
    cooperationSer.getThreeById(coopId).then(function(response){
       if(response.data.code==0){
            $scope.peditInfo = response.data.data;
        }else if(response.data.code==1){
           toastr.error( response.data.msg, '温馨提示');
       }
    });
});
