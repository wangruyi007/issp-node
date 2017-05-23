var app = angular.module('festivaltime', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.legalholiday.holiday.festivaltime", {
        url : "/festivaltime",
        views : {  
            "content@root.legalholiday.holiday" : {
                templateUrl : "root/legalholiday/holiday/festivaltime/_res/html/index.html",
                controller:"festivaltimeCtrl"
            },"menu@root.legalholiday.holiday" : {
                templateUrl : "root/legalholiday/holiday/festivaltime/_res/html/menu.html",
                controller:"festivaltimeMenuCtrl"
            }
        }
    }).state("root.legalholiday.holiday.festivaltime.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.legalholiday.holiday.festivaltime":{
                templateUrl : "root/legalholiday/holiday/festivaltime/add/_res/html/index.html",
                controller:'festivaltimeAddCtrl'
            }
        }
    }).state("root.legalholiday.holiday.festivaltime.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.legalholiday.holiday.festivaltime":{
                templateUrl : "root/legalholiday/holiday/festivaltime/edit/_res/html/index.html",
                controller:'festivaltimeEditCtrl'
            }
        }
    })
});