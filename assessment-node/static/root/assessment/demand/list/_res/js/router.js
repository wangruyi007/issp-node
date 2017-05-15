var app = angular.module('demandList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.demand.list",{
        url:"/list",
        views:{
            "content@root.assessment.demand":{
                templateUrl : "root/assessment/demand/list/_res/html/index.html",
                controller:'demandListCtrl'
            }
        }
    }).state("root.assessment.demand.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.assessment.demand.list":{
                templateUrl : "root/assessment/demand/list/delete/_res/html/index.html",
                controller:'demandDeleteCtrl'
            }
        }
     })
});