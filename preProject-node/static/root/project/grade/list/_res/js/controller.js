var app = angular.module('gradeList', ['ng-pagination','toastr']);
app.controller('gradeListCtrl',function($scope,gradeSer,toastr){
    $scope.$emit('changeId', null);

    $scope.selectList = function(event){
        angular.forEach($scope.gradeLists,function(obj){
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
        gradeSer.listGrade(pages).then(function(response){
            if(response.data.code==0){
                $scope.gradeLists = response.data.data;
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }
    gradeSer.countGrade().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.gradeLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });



})
;


