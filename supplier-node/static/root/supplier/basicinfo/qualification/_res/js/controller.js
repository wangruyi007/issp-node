var app = angular.module('qualificationBasic', ['toastr','ng-pagination']);
app.controller('qualificationBasicCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams,$rootScope,$location){
    //列表
    var qualificationData ={id: $stateParams.id};
    basicinfoSer.qualificationList(qualificationData).then(function (response) {
        if (response.data.code == 0) {
            $scope.qualificationBasics = response.data
        } else {
            toastr.error("请求超时，请联系管理员", '温馨提示');
        }
    });
    $scope.selectList = function(event){
        angular.forEach($scope.qualificationBasics.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idSocialList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeSocialListId', $scope.idSocialList);
    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.qualificationBasics,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    //删除
    $scope.$on('deledSubId',function(event,delid){
        angular.forEach($scope.qualificationBasics.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    //监听到父Ctrl后改变事件
    $scope.$on("socialListId", function(event, suId){
     $scope.idSocialList = suId;
     });
     $scope.qualiDelete = function(){
     if($scope.idSocialList){
     $state.go('root.supplier.basicinfo.qualification.qualiDelete[12]',{suId:$scope.idSocialList});
     }
     };
     $scope.qualiEdit = function(){
     if($scope.idSocialList){
     $state.go('root.supplier.basicinfo.qualification.qualiEdit[12]',{suId:$scope.idSocialList});
     }
     };
});