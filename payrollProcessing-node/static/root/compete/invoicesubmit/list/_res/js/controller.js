var app = angular.module('invoicesubmitList', ['ng-pagination','toastr']);
app.controller('invoicesubmitListCtrl',function($scope,invoicesubmitSer,toastr) {

   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.invoicesubmitLists,function(obj){
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
        invoicesubmitSer.invoicesubmitList(listData).then(function(response){
            if(response.data.code==0){
                $scope.invoicesubmitLists = response.data.data
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 1, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    invoicesubmitSer.invoicesubmitCount().then(function(response){
        if(response.data.code == 0){
            $scope.abili.itemsCount = response.data;
        }else{
                toastr.error( response.data.msg, '温馨提示');
            }
    });
    // 删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.invoicesubmitLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});
