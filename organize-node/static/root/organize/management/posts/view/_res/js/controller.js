var app = angular.module('postsExplain', ['toastr','angularjs-dropdown-multiselect']);
app.controller('postsViewCtrl', function($scope,$state,toastr,postsSer,$stateParams){
    var getId = {id:$stateParams.id};
    postsSer.getPostsDetail(getId).then(function(response){
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





