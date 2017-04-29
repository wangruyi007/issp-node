var app = angular.module('summaryList', ['ng-pagination','toastr']);
app.controller('summaryListCtrl',function($scope,summarySer,toastr){
    $scope.teamInfo = {};
    function activatePage(page) {
        var listData = {
            page:page
        }
        summarySer.summaryProblemList(listData).then(function(response){
            if(response.data.code==0){
                $scope.processingLists = response.data.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }


//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    // summarySer.countAssignment().then(function(response){
    //     if(response.data.code==0){
    //         $scope.custom.itemsCount = response.data.data;
    //     }else{
    //         toastr.error( "请求超时，请联系管理员", '温馨提示');
    //     }
    // })

});

