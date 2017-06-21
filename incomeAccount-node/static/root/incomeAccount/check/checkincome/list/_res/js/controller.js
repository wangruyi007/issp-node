/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('checkincomeList', ['ng-pagination','toastr']);
app.controller('checkincomeListCtrl',function($scope,checkincomeSer,toastr) {
    $scope.companySearchFun = function(){
        $scope.teamInfo = {};
    };
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.mainfeeLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    
    function activatePage(page) {
        var listData = {
            page:page
        }
        checkincomeSer.allList(listData).then(function(response){
            if(response.data.code==0){
                $scope.mainfeeLists = response.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 9, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    checkincomeSer.allCount().then(function(response){
        if(response.data.code == 0){
            $scope.abili.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.mainfeeLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});
