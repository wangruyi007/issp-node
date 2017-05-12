/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('taxesmanageView', ['ng-pagination','toastr']);
app.controller('taxesmanageViewCtrl',function($scope,taxesmanageSer,toastr) {//areaLists
    $scope.areaList = {};
    $scope.collectFun = function(){
        $scope.month = angular.element(".month").val();//
        var viewData = {
            company:$scope.company || "",
            month:$scope.month || "",
            taxType:$scope.taxType || ""
        }
        taxesmanageSer.viewList(viewData).then(function(response){
            if(response.data.code==0){
                $scope.data = response.data.data;
            }
        });
    }
    
});
