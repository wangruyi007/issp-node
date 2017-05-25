/**
 * Created by ike on 2017/4/20.
 */
var app = angular.module('socialListBasic', ['toastr','ng-pagination']);
app.controller('socialListBasicCtrl', function($scope, selfcapSer,$state,toastr,$stateParams){

    $scope.selectList = function(event){
        angular.forEach($scope.socialListBasics.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idSocialList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeSocialListId', $scope.idSocialList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.socialListBasics.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    //分页
    $scope.abili2 = {
        itemsCount: 12,//总条数
        take: 10,        //每页显示
        activatePage: activatePage, //当前页
    };
    selfcapSer.countSocial().then(function (response) {
        if(response.data.code==0){
            $scope.abili2.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    function activatePage(page) {
        var listData2 = {
            page: page,
            id:$stateParams.id
        };
        selfcapSer.listSocialSelf(listData2).then(function (response) {
            if (response.data.code == 0) {
                $scope.socialListBasics = response.data
            } else {
                toastr.error("请求超时，请联系管理员", '温馨提示');
            }
        });
    }
    //获取值
   $scope.$on('deledSubId',function(event,delid){
        angular.forEach($scope.socialListBasics.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});