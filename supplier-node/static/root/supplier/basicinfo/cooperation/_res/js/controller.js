/**
 * Created by ike on 2017/5/3.
 */
var app = angular.module('cooperationBasic', ['toastr','ng-pagination']);
app.controller('cooperationBasicCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams){
    //列表
    var coopData ={id: $stateParams.id};
    basicinfoSer.cooperationList(coopData).then(function (response) {
        if (response.data.code == 0) {
            $scope.cooperationBasics = response.data
        } else {
            toastr.error("请求超时，请联系管理员", '温馨提示');
        }
    });
    $scope.selectList = function(event){
        angular.forEach($scope.cooperationBasics.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idSocialList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeSocialListId', $scope.idSocialList);
    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.cooperationBasics,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    //删除
    $scope.$on('deledSubId',function(event,delid){
        angular.forEach($scope.cooperationBasics.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    //监听到父Ctrl后改变事件
    $scope.$on("socialListId", function(event, suId){
     $scope.idSocialList = suId;
     });
     $scope.cooperationDelete = function(){
     if($scope.idSocialList){
     $state.go('root.supplier.basicinfo.cooperation.cooperationDelete[12]',{suId:$scope.idSocialList});
      }
     };
     $scope.cooperationEdit = function(){
     if($scope.idSocialList){
     $state.go('root.supplier.basicinfo.cooperation.cooperationEdit[12]',{suId:$scope.idSocialList});
     }
     };
});