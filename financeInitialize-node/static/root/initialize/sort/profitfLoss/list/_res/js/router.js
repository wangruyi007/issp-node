/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('profitfLossList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.sort.profitfLoss.list",{
        url:"/list",
        views:{
            "content@root.initialize.sort.profitfLoss":{
                templateUrl : "root/initialize/sort/profitfLoss/list/_res/html/index.html",
                controller:'profitfLossListCtrl'
            }
        }
    }).state("root.initialize.sort.profitfLoss.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.initialize.sort.profitfLoss.list":{
                templateUrl : "root/initialize/sort/profitfLoss/list/delete/_res/html/index.html",
                controller:'profitfLossDeleteCtrl'
            }
        }
    })
});