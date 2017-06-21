var app = angular.module('detailsBasic', ['toastr']);
app.controller('detailsBasicCtrl', function($scope, basicinfoSer,$stateParams,$state,toastr){
    var editData ={id: $stateParams.id};
    //获取值
    basicinfoSer.editBasicInfoById(editData).then(function(response){
        if(response.data.code==0){
            $scope.peditInfo = response.data.data;
        }
    });
});




