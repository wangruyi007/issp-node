var app = angular.module('bonusseeReward11', ['ng-pagination','toastr']);
app.controller('bonusseeRewardCtrl',function($scope,bonusSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    function activatePage(page) {
        var listData = {
            page:page || 1,
            id:$stateParams.id
        };
        bonusSer.seeRewardbonus(listData).then(function(response){
            if(response.data.code==0){
                $scope.bonusseeLi = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.bonusseeLi,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.bonusseeLi,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

   //分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

});
