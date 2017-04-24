var app = angular.module('marketResearchList', ['ng-pagination','toastr']);
app.controller('marketResearchListCtrl',function($scope,marketResearchSer,toastr){
    function activatePage(page) {
        var listData = {
            page:page
        }
        marketResearchSer.researchList(listData).then(function(response){
            if(response.data.code==0){

                $scope.rsearchLists = response.data.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }

    $scope.selectList = function(event){
        angular.forEach($scope.rsearchLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };
    $scope.$on('deletedId',function(event,delid){

        angular.forEach($scope.rsearchLists,function(obj){

            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });

//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    marketResearchSer.countResearch().then(function(response){
        console.log(response);
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    })

});

