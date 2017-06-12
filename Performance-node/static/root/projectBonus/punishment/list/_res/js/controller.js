var app = angular.module('punishmentList', ['ng-pagination','toastr']);
app.controller('punishmentListCtrl',function($scope,punishmentSer,toastr) {

   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.punishmentLists,function(obj){
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
        punishmentSer.punishmentList(listData).then(function(response){
            if(response.data.code==0){
                $scope.punishmentLists = response.data.data
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
    punishmentSer.punishmentCount().then(function(response){
        if(response.data.code == 0){;
            $scope.abili.itemsCount = response.data.data;
        }else{
                toastr.error( response.data.msg, '温馨提示');
            }
    });
    // 删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.punishmentLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    //查询更多
    $scope.moreList = function(event){
        angular.forEach($scope.registeredLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
});
