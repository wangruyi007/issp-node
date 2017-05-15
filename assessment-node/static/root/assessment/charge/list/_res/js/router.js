var app = angular.module('chargeList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.charge.list",{
        url:"/list",
        views:{
            "content@root.assessment.charge":{
                templateUrl : "root/assessment/charge/list/_res/html/index.html",
                controller:'chargeListCtrl'
            }
        }
    }).state("root.assessment.charge.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.assessment.charge.list":{
                templateUrl : "root/assessment/charge/list/delete/_res/html/index.html",
                controller:'chargeDeleteCtrl'
            }
        }
     })
});