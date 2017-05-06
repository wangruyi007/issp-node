var app = angular.module('information', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.marketinform.information", {
        url : "/information",
        views : {
            "content@root.marketinform" : {
                templateUrl : "root/marketinform/information/_res/html/index.html",
                controller:"informationCtrl"
            },"menu@root.marketinform" : {
                templateUrl : "root/marketinform/information/_res/html/menu.html",
                controller:"informationMenuCtrl"
            }
        }
    }).state("root.marketinform.information.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.marketinform.information":{
                templateUrl : "root/marketinform/information/add/_res/html/index.html",
                controller:'informationAddCtrl'
            }
        }
    }).state("root.marketinform.information.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.marketinform.information":{
                templateUrl : "root/marketinform/information/edit/_res/html/index.html",
                controller:'informationEditCtrl'
            }
        }
    }).state("root.marketinform.information.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.marketinform.information":{
                templateUrl : "root/marketinform/information/summary/_res/html/index.html",
                controller:'informationSummaryCtrl'
            }
        }
    })
});