var app = angular.module('entryRegisterList', ['ng-pagination','toastr']);
app.controller('entryRegisterListCtrl',function($scope,registerSer,toastr) {

   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.applylendLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.applylendLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    //清空
    $scope.clear = function(){
        // angular.element('.lendDate').val()  = " ";
    }

    function activatePage(page) {
        var listData = {
            page:page
        }
        registerSer.allList(listData).then(function(response){
            if(response.data.code==0){
                $scope.applylendLists = response.data
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 9, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    registerSer.allCount().then(function(response){
        if(response.data.code == 0){
            $scope.abili.itemsCount = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.applylendLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});
