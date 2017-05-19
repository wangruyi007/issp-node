/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('giftList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.legalholiday.holiday.gift.list",{
        url:"/list",
        views:{
            "content@root.legalholiday.holiday.gift":{
                templateUrl : "root/legalholiday/holiday/gift/list/_res/html/index.html",
                controller:'giftListCtrl'
            }
        }
    }).state("root.legalholiday.holiday.gift.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.legalholiday.holiday.gift.list":{
                templateUrl : "root/legalholiday/holiday/gift/list/delete/_res/html/index.html",
                controller:'giftDeleteCtrl'
            }
        }
    })
});