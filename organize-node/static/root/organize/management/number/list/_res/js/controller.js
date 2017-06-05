var app = angular.module('numberList', ['ng-pagination','toastr']);
app.controller('numberListCtrl',function($scope,toastr,numberSer){
    $scope.$emit('changeId', null);

    $scope.selectList = function(event){
        angular.forEach($scope.numberLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;

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

        numberSer.listNumber(pages).then(function(response){
            if(response.data.code==0){
                $scope.numberLists = response.data.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }
    numberSer.countNumber().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.numberLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });
});



