/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('projectgroup', ['toastr']);
app.controller('collectCtrl',function($scope,taxesmanageSer,toastr) {
    
    $scope.collectFun = function(){
        var collectData = {
            company:$scope.company || ""
        }
        taxesmanageSer.collectList(collectData).then(function(response){
            if(response.data.code==0){
                $scope.data = response.data.data;
            }else{
                toastr.success('汇总失败','温馨提示')
            }
        });
    }
    
});
