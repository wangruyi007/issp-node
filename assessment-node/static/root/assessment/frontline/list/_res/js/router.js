var app = angular.module('frontlineList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.frontline.list",{
        url:"/list",
        views:{
            "content@root.assessment.frontline":{
                templateUrl : "root/assessment/frontline/list/_res/html/index.html",
                controller:'frontlineListCtrl'
            }
        }
    }).state("root.assessment.frontline.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.assessment.frontline.list":{
                templateUrl : "root/assessment/frontline/list/delete/_res/html/index.html",
                controller:'frontlineDeleteCtrl'
            }
        }
     })
});