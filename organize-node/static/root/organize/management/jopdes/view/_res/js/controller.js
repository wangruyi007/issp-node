var app = angular.module('jopdesView', ['toastr','angularjs-dropdown-multiselect']);
app.controller('jopdesViewCtrl', function($scope,$state,$stateParams,toastr,jopdesSer){
    var getId = {id:$stateParams.id};
    jopdesSer.getPostsDetail(getId).then(function(response){
        if(response.data.code==0){
            $scope.postsDetail = response.data.data;
        }
    });
    $scope.moreList = function(event){
        angular.forEach($scope.postsLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
});





