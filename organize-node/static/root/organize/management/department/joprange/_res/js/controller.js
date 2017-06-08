var app = angular.module('departmentJop', ['toastr','angularjs-dropdown-multiselect']);
app.controller('departmentJopCtrl', function($scope,$state,toastr,departSer,$stateParams){

    $scope.positions = [];
    $scope.stringSettings = {displayProp: 'value',idProperty: 'id'};


    var getId={id:$stateParams.id};
    departSer.departRange(getId).then(function(response){
        if(response.data.code==0){
            $scope.workOptions = response.data.data
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
});





