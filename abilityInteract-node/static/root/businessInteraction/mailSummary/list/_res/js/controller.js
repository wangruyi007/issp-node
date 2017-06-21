var app = angular.module('mailSummaryList', ['ng-pagination','toastr']);
app.controller('mailSummaryListCtrl',function($scope,emailSer,toastr){
    $scope.$emit('changeId', null);
    function activatePage(page) {
        var listData = {
            page:page
        };
        emailSer.emailList(listData).then(function(response){
            if(response.data.code==0){

                $scope.mailLists = response.data.data
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }

    $scope.selectList = function(event){
        angular.forEach($scope.mailLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.mailLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.mailLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });
    //冻结
    $scope.$on('congealId',function(event,conid){
        angular.forEach($scope.mailLists,function(obj){
            if(obj.id == conid){
                obj.status = 'CONGEAL';
                obj._selectList = false;
            }
        })
    });

    //解冻
    $scope.thaw = function(event){
        var data = {
            id :event.id
        }
        emailSer.thawEmail(data).then(function(response){
            if(response.data.code==0){
                event.status = "THAW"
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        })
    };
//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    emailSer.countEmail().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    })

});

