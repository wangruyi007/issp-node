var app = angular.module('competitor', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.competitor", {
        url : "/competitor",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/competitor/_res/html/index.html",
                controller:"competitorCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/competitor/_res/html/menu.html",
                controller:"competitorMenuCtrl"
            }
        }
    }).state("root.compete.competitor.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.compete.competitor":{
                templateUrl : "root/compete/competitor/add/_res/html/index.html",
                controller:'companyAddCtrl'
            }
        }
    }).state("root.compete.competitor.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.compete.competitor":{
                templateUrl : "root/compete/competitor/edit/_res/html/index.html",
                controller:'companyEditCtrl'
            }
        }
    }).state("root.compete.competitor.organize[12]",{
        url:"/organize[12]?id=",
        views:{
            "content@root.compete.competitor":{
                templateUrl : "root/compete/competitor/organize/_res/html/index.html",
                controller:'competitorOrganizeCtr'
            }
        }
    })
});