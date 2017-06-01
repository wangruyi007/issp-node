var app = angular.module('confirmedList', ['ng-pagination','toastr']);
app.controller('confirmedListCtrl',function($scope,confirmedSer,toastr) {

   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.confirmedLists,function(obj){
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
        confirmedSer.confirmedList(listData).then(function(response){
            if(response.data.code==0){
                $scope.confirmedLists = response.data.data
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
    // 确定1
    $scope.$on('FirstId',function(event,delid){
        angular.forEach($scope.confirmedLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    // 确定2
    $scope.$on('SecondId',function(event,delid){
        angular.forEach($scope.confirmedLists.data,function(obj){
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
