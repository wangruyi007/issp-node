var app = angular.module('targetInfoList', ['ng-pagination','toastr']);
app.controller('targetInfoListCtrl',function($scope,targetInfoSer,toastr){
    function activatePage(page) {
        var listData = {
            page:page
        }
        targetInfoSer.targetInfoList(listData).then(function(response){

            if(response.data.code==0){
                $scope.targetLists = response.data.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }

    $scope.selectList = function(event){
        angular.forEach($scope.targetLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };
    $scope.$on('deletedId',function(event,delid){

        angular.forEach($scope.targetLists,function(obj){

            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });

//分页
    $scope.custom = {
        itemsCount: 14, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    targetInfoSer.countTarget().then(function(response){
        console.log(response);
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    })

});

