/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('mainfeeView', ['ng-pagination','toastr']);
app.controller('viewCtrl',function($scope,mainfeeSer,toastr,$stateParams) {//areaLists

     //查看更多
    $scope.moreList = function(event){
        event._moreList = !event._moreList;
    };
    //获取id
    var companyId = {id : $stateParams.id};
    $scope.areaList = {};
    mainfeeSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.list = response.data.data;
        }
    });
    
});
