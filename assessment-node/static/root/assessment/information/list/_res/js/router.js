var app = angular.module('informationList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.information.list",{
        url:"/list",
        views:{
            "content@root.assessment.information":{
                templateUrl : "root/assessment/information/list/_res/html/index.html",
                controller:'informationListCtrl'
            }
        }
    }).state("root.assessment.information.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.assessment.information.list":{
                templateUrl : "root/assessment/information/list/delete/_res/html/index.html",
                controller:'informationDeleteCtrl'
            }
        }
     })
});