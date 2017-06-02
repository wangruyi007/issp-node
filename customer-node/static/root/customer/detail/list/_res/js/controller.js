var app = angular.module('detailList', ['ng-pagination','toastr']);
app.controller('detailListCtrl',function($scope,detailSer,toastr){

    $scope.$emit('changeCusnum', null)

    $scope.selectList = function(event){
        angular.forEach($scope.detailLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        $scope.cusNum = event.customerNum;
        //向父Ctrl传递事件
        $scope.$emit('changeCusnum',  $scope.cusNum);
        $scope.$emit('changeId',  $scope.idList);
    }

    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.detailLists,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    })
    //分页
    $scope.custom = {
        itemsCount: 11,//总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };
    function activatePage(page) {
        var listData = {
            page:page
        }
        detailSer.listCustomerDetail(listData).then(function(response){
            if(response.data.code==0){
                $scope.detailLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
    detailSer.countDetail().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    })
});


