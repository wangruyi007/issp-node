var app = angular.module('summary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.statement.summary", {
        url : "/summary",
        views : {
            "content@root.statement" : {
                templateUrl : "root/statement/summary/_res/html/index.html",
                controller:"summaryCtrl"
            },"menu@root.statement" : {
                templateUrl : "root/statement/summary/_res/html/menu.html",
                controller:"summaryMenuCtrl"
            }
        }
    }).state("root.statement.summary.week[12]",{
        url:"/week[12]",
        views:{
            "content@root.statement.summary":{
                templateUrl : "root/statement/summary/week/_res/html/index.html",
                controller:'weekCtrl'
            }
        }
    }).state("root.statement.summary.month[12]",{
        url:"/month[12]",
        views:{
            "content@root.statement.summary":{
                templateUrl : "root/statement/summary/month/_res/html/index.html",
                controller:'monthCtrl'
            }
        }
    }).state("root.statement.summary.area[12]",{
        url:"/area[12]",
        views:{
            "content@root.statement.summary":{
                templateUrl : "root/statement/summary/area/_res/html/index.html",
                controller:'areaCtrl'
            }
        }
    }).state("root.statement.summary.project[12]",{
        url:"/project[12]",
        views:{
            "content@root.statement.summary":{
                templateUrl : "root/statement/summary/project/_res/html/index.html",
                controller:'projectCtrl'
            }
        }
    }).state("root.statement.summary.driver[12]",{
        url:"/driver[12]",
        views:{
            "content@root.statement.summary":{
                templateUrl : "root/statement/summary/driver/_res/html/index.html",
                controller:'driverCtrl'
            }
        }
    })
});