var app = angular.module('water', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.water", {
        url : "/water",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/water/_res/html/index.html",
                controller:"waterCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/water/_res/html/menu.html",
                controller:"waterMenuCtrl"
            }
        }
    }).state("root.compete.water.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.compete.water":{
                templateUrl : "root/compete/water/add/_res/html/index.html",
                controller:'waterAddCtrl'
            }
        }
    }).state("root.compete.water.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.compete.water":{
                templateUrl : "root/compete/water/edit/_res/html/index.html",
                controller:'waterEditCtrl'
            }
        }
    }).state("root.compete.water.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.compete.water":{
                templateUrl : "root/compete/water/summary/_res/html/index.html",
                controller:'waterSummaryCtrl'
            }
        }
    })
});