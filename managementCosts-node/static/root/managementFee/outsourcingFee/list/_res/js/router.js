var app = angular.module('outsourcingFeeList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.managementFee.outsourcingFee.list",{
        url:"/list",
        views:{
            "content@root.managementFee.outsourcingFee":{
                templateUrl : "root/managementFee/outsourcingFee/list/_res/html/index.html",
                controller:'outsourcingListCtrl'
            }
        }
    }).state("root.managementFee.outsourcingFee.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.managementFee.outsourcingFee.list":{
                templateUrl : "root/managementFee/outsourcingFee/list/delete/_res/html/index.html",
                controller:'deleteCtrl'
            }
        }
     })
});