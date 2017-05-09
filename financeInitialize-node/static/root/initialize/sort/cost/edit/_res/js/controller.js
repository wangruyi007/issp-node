/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('costEdit', ['toastr']);
app.controller('costEditCtrl', function($scope, assetsSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    assetsSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
            var firstData = {
                categoryName:'COST'
            }
            //获取一级列表
            assetsSer.firstList(firstData).then(function(response){
                if(response.data.code == 0){
                        $scope.firstList = response.data.data;
                    }else if(response.data.code==403){
                        toastr.error( "请登录用户", '温馨提示');
                }
            })
        }
    });
    //点击提交
    $scope.EditFun =function(){
        var data = $scope.data;
        data.id = companyId.id;;
        assetsSer.marketserveapplyEdit1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.initialize.sort.cost.list');
                toastr.success('温馨提示',"此次编辑成功");
            }if(response.data.code == 403){
                toastr.error('温馨提示','提交错误')
            }
        })
    }
    
});
   