/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('festivaltimeList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.legalholiday.holiday.festivaltime.list",{
        url:"/list",
        views:{
            "content@root.legalholiday.holiday.festivaltime":{
                templateUrl : "root/legalholiday/holiday/festivaltime/list/_res/html/index.html",
                controller:'festivaltimeListCtrl'
            }
        }
    }).state("root.legalholiday.holiday.festivaltime.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.legalholiday.holiday.festivaltime.list":{
                templateUrl : "root/legalholiday/holiday/festivaltime/list/delete/_res/html/index.html",
                controller:'festivaltimeDeleteCtrl'
            }
        }
    })
});