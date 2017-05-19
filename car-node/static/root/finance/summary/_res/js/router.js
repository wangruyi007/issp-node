var app = angular.module('summary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.finance.summary", {
        url : "/summary",
        views : {
            "content@root.finance" : {
                templateUrl : "root/finance/summary/_res/html/index.html",
                controller:"summaryCtrl"
            },"menu@root.finance" : {
                templateUrl : "root/finance/summary/_res/html/menu.html",
                controller:"summaryMenuCtrl"
            }
        }
    }).state("root.finance.summary.week[12]",{
        url:"/week[12]",
        views:{
            "content@root.finance.summary":{
                templateUrl : "root/finance/summary/week/_res/html/index.html",
                controller:'weekCtrl'
            }
        }
    }).state("root.finance.summary.month[12]",{
        url:"/month[12]",
        views:{
            "content@root.finance.summary":{
                templateUrl : "root/finance/summary/month/_res/html/index.html",
                controller:'monthCtrl'
            }
        }
    }).state("root.finance.summary.area[12]",{
        url:"/area[12]",
        views:{
            "content@root.finance.summary":{
                templateUrl : "root/finance/summary/area/_res/html/index.html",
                controller:'areaCtrl'
            }
        }
    }).state("root.finance.summary.project[12]",{
        url:"/project[12]",
        views:{
            "content@root.finance.summary":{
                templateUrl : "root/finance/summary/project/_res/html/index.html",
                controller:'projectCtrl'
            }
        }
    }).state("root.finance.summary.driver[12]",{
        url:"/driver[12]",
        views:{
            "content@root.finance.summary":{
                templateUrl : "root/finance/summary/driver/_res/html/index.html",
                controller:'driverCtrl'
            }
        }
    })
});