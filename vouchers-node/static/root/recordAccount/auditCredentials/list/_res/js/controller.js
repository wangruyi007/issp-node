var app = angular.module('auditCredentialsList', ['ng-pagination','toastr']);
app.controller('auditCredentialsListCtrl',function($scope,credentialsSer,toastr){
    $scope.$emit('changeId', null);

    function activatePage(page) {
        var listData = {
            page:page
        };
        credentialsSer.listCredentials(listData).then(function(response){
            if(response.data.code==0){

                $scope.auditedLists = response.data.data
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }

    $scope.selectList = function(event){
        angular.forEach($scope.auditedLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.auditedLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    // 多选
    $scope.selected = [];
    $scope.check=function(event){
        event._add = ! event._add;
        if( event._add==true&&$scope.selected.indexOf(event.id)==-1){
            $scope.selected.push(event.id);
        }else if(event._add==false&&$scope.selected.indexOf(event.id)!=-1){
            $scope.selected.splice($scope.selected.indexOf(event.id), 1);
        }

        $scope.$emit('seledIds', $scope.selected);
    };
    // 过账
    $scope.$on('postId',function(event,postids){

        angular.forEach($scope.auditedLists,function(obj){
            angular.forEach(postids,function (sub) {
                if(obj.id == sub){
                    obj._posting = obj.id
                }
            })

        })
    });
    //反审核
    $scope.$on('antiId',function(event,antid){
        angular.forEach($scope.auditedLists,function(obj){
            if(obj.id == antid){
                obj._posting = antid
            }
        })
    });
//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    credentialsSer.countCredentials().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

});

