var app = angular.module('waitconfirmList', ['ng-pagination','toastr']);
app.controller('waitconfirmListCtrl',function($scope,waitconfirmSer,toastr) {

   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.waitconfirmLists,function(obj){
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
        waitconfirmSer.waitconfirmList(listData).then(function(response){
            if(response.data.code==0){
                $scope.waitconfirmLists = response.data.data
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
    //查寻更多
    $scope.moreList = function(event){
        angular.forEach($scope.registeredLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    // 审核
    $scope.$on('notarizeId',function(event,checkid){
        angular.forEach($scope.auditLists,function(obj){
            if(obj.id == checkid){
                obj._delete = checkid
            }
        })
    });
});
