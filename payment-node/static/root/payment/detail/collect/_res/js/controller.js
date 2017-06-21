var app = angular.module('detailCollect', ['toastr','angularjs-dropdown-multiselect']);
app.controller('detailCollectCtrl', function($scope, detailSer,$state){
    $scope.$on("socialListId", function(event, suId){
        $scope.idSocialList = suId;
    });
    //选择
    $scope.$emit('changeSocialListId', null);
    $scope.selectList = function(event){
        angular.forEach($scope.summaryListDetails,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idSocialList = event.remark;
        //向父Ctrl传递事件
        $scope.$emit('changeSocialListId',$scope.idSocialList);
    };
    $scope.areas = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取公司
    detailSer.listSummaryArea().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        detailSer.summaryDetails($scope.areas).then(function(response){
            if(response.data.code == 0){
                $scope.summaryListDetails = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示')
            }
        })
    }};
    $scope.collectMore = function(){
        if($scope.idSocialList){
            $state.go('root.payment.detail.collect.collectMore[12]',{suId:$scope.idSocialList});
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    };
});



