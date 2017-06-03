var app = angular.module('salaryconfirmList', ['ng-pagination','toastr']);
app.controller('salaryconfirmListCtrl',function($scope,salaryconfirmSer,toastr) {

   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.salaryconfirmLists,function(obj){
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
        salaryconfirmSer.salaryconfirmList(listData).then(function(response){
            if(response.data.code==0){
                $scope.salaryconfirmLists = response.data.data
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
    salaryconfirmSer.countSalaryconfirm().then(function(response){
        if(response.data.code == 0){
            $scope.abili.itemsCount = response.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    // 删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.salaryconfirmLists.data,function(obj){
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
