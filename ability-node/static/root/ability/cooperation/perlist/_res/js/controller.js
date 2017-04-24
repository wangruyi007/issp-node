/**
 * Created by ike on 2017/4/20.
 */
var app = angular.module('cooperationAbi', ['toastr']);
app.controller('cooperationAbiCtrl', function($scope, cooperationSer,$state,toastr,$stateParams){
   var coopId = {id : $stateParams.id,};
    //获取值
    cooperationSer.getThreeById(coopId).then(function(response){
       if(response.data.code==0){
            $scope.peditInfo = response.data.data;
        }
    });
});
