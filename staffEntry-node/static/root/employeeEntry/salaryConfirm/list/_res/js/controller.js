
var app = angular.module('salaryConfirmList', ['ng-pagination','toastr']);
app.controller('salaryConfirmListCtrl',function($scope,salaryConfirmSer,toastr) {
    $scope.$emit('changeId', null);
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.confirmLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.confirmLists,function(obj){
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
        salaryConfirmSer.listConfirm(listData).then(function(response){
            if(response.data.code==0){
                $scope.confirmLists = response.data.data
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
    salaryConfirmSer.countConfirm().then(function(response){
        if(response.data.code == 0){
            $scope.abili.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.confirmLists,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});
