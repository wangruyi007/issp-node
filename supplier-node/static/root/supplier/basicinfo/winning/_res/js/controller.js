var app = angular.module('winningBasic', ['toastr','ng-pagination']);
app.controller('winningBasicCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams){
    $scope.selectList = function(event){
        angular.forEach($scope.winningBasics.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idSocialList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeSocialListId', $scope.idSocialList);
    };
    //列表
    var rewardData ={id: $stateParams.id};
    basicinfoSer.rewardSituationList(rewardData).then(function (response) {
        if (response.data.code == 0) {
            $scope.winningBasics = response.data
        } else {
            toastr.error("请求超时，请联系管理员", '温馨提示');
        }
    });
    //删除
    $scope.$on('deledSubId',function(event,delid){
        angular.forEach($scope.winningBasics.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    //监听到父Ctrl后改变事件
    $scope.$on("socialListId", function(event, subId){
        $scope.idSocialList = subId;
    });
    $scope.rewardDelete = function(){
        if($scope.idSocialList){
            $state.go('root.supplier.basicinfo.winning.rewardDelete[12]',{subId:$scope.idSocialList});
        }
    };
    $scope.rewardEdit = function(){
        if($scope.idSocialList){
            $state.go('root.supplier.basicinfo.winning.rewardEdit[12]',{subId:$scope.idSocialList});
       }
    };
});