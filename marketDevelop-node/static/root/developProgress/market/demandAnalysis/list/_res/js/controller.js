var app = angular.module('demandAnalysisList', ['ng-pagination','toastr']);
app.controller('demandAnalysisListCtrl',function($scope,demandAnalysisSer,toastr){
    $scope.$emit('changeId', null);
    function activatePage(page) {
        var listData = {
            page:page
        };
        demandAnalysisSer.demandList(listData).then(function(response){
            if(response.data.code==0){
                $scope.analysisLists = response.data.data
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    }

    $scope.selectList = function(event){
        angular.forEach($scope.analysisLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };
    $scope.$on('deletedId',function(event,delid){

        angular.forEach($scope.analysisLists,function(obj){

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

    demandAnalysisSer.countDemand().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else {
            toastr.error(response.data.msg,'温馨提示')
        }
    })

});

