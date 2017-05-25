var app = angular.module('record', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.record", {
        url : "/record",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/record/_res/html/index.html",
                controller:"recordCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/record/_res/html/menu.html",
                controller:"recordMenuCtrl"
            }
        }
    }).state("root.compete.record.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.compete.record":{
                templateUrl : "root/compete/record/add/_res/html/index.html",
                controller:'recordAddCtrl'
            }
        }
    }).state("root.compete.record.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.compete.record":{
                templateUrl : "root/compete/record/edit/_res/html/index.html",
                controller:'recordEditCtrl'
            }
        }
    }).state("root.compete.record.area[12]",{
        url:"/area[12]",
        views:{
            "content@root.compete.record":{
                templateUrl : "root/compete/record/area/_res/html/index.html",
                controller:'recordAreaCtrl'
            }
        }
    }).state("root.compete.record.project[12]",{
        url:"/project[12]",
        views:{
            "content@root.compete.record":{
                templateUrl : "root/compete/record/project/_res/html/index.html",
                controller:'recordProjectCtrl'
            }
        }
    }).state("root.compete.record.group[12]",{
        url:"/group[12]",
        views:{
            "content@root.compete.record":{
                templateUrl : "root/compete/record/group/_res/html/index.html",
                controller:'recordGroupCtrl'
            }
        }
    }).state("root.compete.record.monthAll[12]",{
        url:"/monthAll[12]",
        views:{
            "content@root.compete.record":{
                templateUrl : "root/compete/record/monthAll/_res/html/index.html",
                controller:'recordMonthAllCtrl'
            }
        }
    }).state("root.compete.record.conditionsAll[12]",{
        url:"/conditionsAll[12]",
        views:{
            "content@root.compete.record":{
                templateUrl : "root/compete/record/conditionsAll/_res/html/index.html",
                controller:'recordConditionsAllCtrl'
            }
        }
    })
});