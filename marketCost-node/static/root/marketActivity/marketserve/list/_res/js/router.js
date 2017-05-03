/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('marketserveList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.marketActivity.marketserve.list",{
        url:"/list",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/list/_res/html/index.html",
                controller:'marketserveListCtrl'
            }
        }
    }).state("root.marketActivity.marketserve.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.marketActivity.marketserve.list":{
                templateUrl : "root/marketActivity/marketserve/list/delete/_res/html/index.html",
                controller:'marketserveDeleteCtrl'
            }
        }
    })
});