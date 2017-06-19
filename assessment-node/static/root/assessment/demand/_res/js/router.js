var app = angular.module('demand', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.demand", {
        url : "/demand",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/demand/_res/html/index.html",
                controller:"demandCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/demand/_res/html/menu.html",
                controller:"demandMenuCtrl"
            }
        }
    }).state("root.assessment.demand.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assessment.demand":{
                templateUrl : "root/assessment/demand/add/_res/html/index.html",
                controller:'demandAddCtrl'
            }
        }
    }).state("root.assessment.demand.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.assessment.demand":{
                templateUrl : "root/assessment/demand/edit/_res/html/index.html",
                controller:'demandEditCtrl'
            }
        }
    }).state("root.assessment.demand.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.assessment.demand":{
                templateUrl : "root/assessment/demand/list/_res/html/index.html",
                controller:'demandListCtrl'
            }
        }
    })
});