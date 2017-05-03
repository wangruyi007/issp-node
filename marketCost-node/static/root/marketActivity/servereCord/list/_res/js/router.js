/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('servereCordList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.marketActivity.servereCord.list",{
        url:"/list",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/list/_res/html/index.html",
                controller:'servereCordListCtrl'
            }
        }
    }).state("root.marketActivity.servereCord.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.marketActivity.servereCord.list":{
                templateUrl : "root/marketActivity/servereCord/list/delete/_res/html/index.html",
                controller:'servereCordDeleteCtrl'
            }
        }
    })
});