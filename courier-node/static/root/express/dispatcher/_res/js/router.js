var app = angular.module('dispatcherM', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.express.dispatcher", {
        url : "/dispatcher",
        views : {
            "content@root.express" : {
                templateUrl : "root/express/dispatcher/_res/html/index.html",
                controller:"dispatcherCtrl"
            },"menu@root.express" : {
                templateUrl : "root/express/dispatcher/_res/html/menu.html",
                controller:"dispatcherMenuCtrl"
            }
        }
    }).state("root.express.dispatcher.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.express.dispatcher":{
                templateUrl : "root/express/dispatcher/list/_res/html/index.html",
                controller:'dispatcherListCtrl'
            }
        }
    }).state("root.express.dispatcher.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.express.dispatcher":{
                templateUrl : "root/express/dispatcher/add/_res/html/index.html",
                controller:'dispatcherAddCtrl'
            }
        }
    }).state("root.express.dispatcher.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.express.dispatcher":{
                templateUrl : "root/express/dispatcher/edit/_res/html/index.html",
                controller:'dispatcherEditCtrl'
            }
        }
    }).state("root.express.dispatcher.daySummary[12]",{
        url:"/daySummary[12]",
        views:{
            "content@root.express.dispatcher":{
                templateUrl : "root/express/dispatcher/daySummary/_res/html/index.html",
                controller:'daySummaryCtrl'
            }
        }
    }).state("root.express.dispatcher.weekSummary[12]",{
        url:"/weekSummary[12]",
        views:{
            "content@root.express.dispatcher":{
                templateUrl : "root/express/dispatcher/weekSummary/_res/html/index.html",
                controller:'weekSummaryCtrl'
            }
        }
    }).state("root.express.dispatcher.monthSummary[12]",{
        url:"/monthSummary[12]",
        views:{
            "content@root.express.dispatcher":{
                templateUrl : "root/express/dispatcher/monthSummary/_res/html/index.html",
                controller:'monthSummaryCtrl'
            }
        }
    }).state("root.express.dispatcher.yearSummary[12]",{
        url:"/yearSummary[12]",
        views:{
            "content@root.express.dispatcher":{
                templateUrl : "root/express/dispatcher/yearSummary/_res/html/index.html",
                controller:'yearSummaryCtrl'
            }
        }
    })

});