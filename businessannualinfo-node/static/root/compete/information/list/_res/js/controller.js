var app = angular.module('informationList', ['ng-pagination','toastr']);
app.controller('informationListCtrl',function($scope,informationSer,toastr) {

   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.informationLists,function(obj){
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
        informationSer.listCompeteregistered(listData).then(function(response){
            if(response.data.code==0){
                $scope.informationLists = response.data.data
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
    informationSer.countinformation().then(function(response){
        if(response.data.code == 0){;
            $scope.abili.itemsCount = response.data;
        }else{
                toastr.error( response.data.msg, '温馨提示');
            }
    });
    // 删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.informationLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});
