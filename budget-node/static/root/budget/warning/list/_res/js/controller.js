var app = angular.module('warningList', ['ng-pagination','toastr']);
app.controller('warningListCtrl',function($scope,warningSer,toastr){
    $scope.$emit('changeId', null);
    $scope.selectList = function(event){
        angular.forEach($scope.warningLists,function(obj){
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
        warningSer.listWarning(pages).then(function(response){
            if(response.data.code==0){
                $scope.warningLists = response.data.data;
                console.log($scope.warningLists)
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }
    warningSer.countWarning().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.warningLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });
    warningSer.allCostProjects().then(function(response){
        var sortArr=[];
        if(response.data.code == 0){
            $scope.proData = response.data.data;
            angular.forEach($scope.proData,function (item) {
                sortArr.push(item.incomeDifferences)
                sortArr.push(item.workDifferences)
            });
           $scope.maxNum=sortArr.sort(function (a,b) {
               return b-a
           })[0];
        }
    });
    warningSer.allCostArea().then(function(response){
        var sortArr=[];
        if(response.data.code == 0){
            $scope.proData2 = response.data.data;
            angular.forEach($scope.proData2,function (item) {
                sortArr.push(item.incomeDifferences)
                sortArr.push(item.workDifferences)
            });
           $scope.maxNum2=sortArr.sort(function (a,b) {
               return b-a
           })[0];
        }
    });
});


