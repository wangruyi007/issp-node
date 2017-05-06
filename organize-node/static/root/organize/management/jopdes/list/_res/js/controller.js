var app = angular.module('jopdesList', ['ng-pagination','toastr']);
app.controller('jopdesListCtrl',function($scope,toastr,jopdesSer){
    $scope.$emit('changeId', null);

    $scope.selectList = function(event){
        angular.forEach($scope.jopdesLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        ;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
    };
    //分页
    $scope.pagination = {
        itemsCount: 11,//总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };
    function activatePage(page) {
        var pages = {
            page:page
        };
        jopdesSer.listJopDes(pages).then(function(response){
            console.log(response)
            if(response.data.code==0){
                $scope.jopdesLists = response.data.data;
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }
    jopdesSer.countJopDes().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.jopdesLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });
});


