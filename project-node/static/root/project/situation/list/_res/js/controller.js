/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('situationList', ['ng-pagination','toastr']);
app.controller('situationListCtrl',function($scope,situationSer,toastr) {
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.situationLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.situationLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    function activatePage(page) {
        var listData = {
            page:page
        }
        situationSer.listProjectSituationCap(listData).then(function(response){
            if(response.data.code==0){
                $scope.situationLists = response.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
        $scope.collect = function(){
            $scope.abili = {
                itemsCount: 12,//总条数
                take: 10,        //每页显示
                activatePage: activatePage, //当前页
            };
            situationSer.countProjectBaseInfo2($scope.enginPlace,$scope.completeCondition).then(function (response) {
                if(response.data.code==0){
                    $scope.abili.itemsCount = response.data.data;
                }else{
                    toastr.error( "请求超时，请联系管理员", '温馨提示');
                }
            })
            var data = {
                enginPlace: $scope.enginPlace,
                completeCondition: $scope.completeCondition,
                page: page
            };
            situationSer.searchProject(data).then(function(response){
                if(response.data.code == 0){
                    $scope.situationLists = response.data
                }else if(response.data.code==403){
                    toastr.error( "请登录用户", '温馨提示');
                }
            });
        };
    }
    $scope.abili = {
        itemsCount: 14, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    situationSer.countProjectBaseInfo().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.situationLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});
