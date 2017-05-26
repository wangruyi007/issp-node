var app = angular.module('recordList', ['ng-pagination','toastr']);
app.controller('recordListCtrl',function($scope,recordSer,toastr) {

   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.recordLists,function(obj){
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
        recordSer.moneyList(listData).then(function(response){
            if(response.data.code==0){
                $scope.recordLists = response.data.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 1, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    recordSer.countRecord().then(function(response){
        if(response.data.code == 0){;
            $scope.abili.itemsCount = response.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    // 删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.recordLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});
