var app = angular.module('payedList', ['ng-pagination','toastr']);
app.controller('payedListCtrl',function($scope,payedSer,toastr) {

   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.payedLists,function(obj){
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
        payedSer.payedList(listData).then(function(response){
            if(response.data.code==0){
                $scope.payedLists = response.data.data
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
    // 确认1
    $scope.$on('firstId',function(event,delid){
        angular.forEach($scope.payedLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    // 确认2
    $scope.$on('secondId',function(event,delid){
        angular.forEach($scope.payedLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    //查寻更多
    $scope.moreList = function(event){
        angular.forEach($scope.registeredLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
});
