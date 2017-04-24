/**
 * Created by ike on 2017/4/20.
 */
var app = angular.module('selfcapList2', ['toastr']);
app.controller('selfcapListCtrl2', function($scope, selfcapSer,$state,toastr,$stateParams){
   var selfcapId = {id : $stateParams.id};
   console.log($stateParams.id)
    //获取值
    selfcapSer.getTwoById(selfcapId).then(function(response){
       if(response.data.code==0){
            $scope.peditInfo = response.data.data;
        }
    });
});
