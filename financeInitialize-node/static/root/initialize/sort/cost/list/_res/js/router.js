/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('costList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.sort.cost.list",{
        url:"/list",
        views:{
            "content@root.initialize.sort.cost":{
                templateUrl : "root/initialize/sort/cost/list/_res/html/index.html",
                controller:'costListCtrl'
            }
        }
    }).state("root.initialize.sort.cost.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.initialize.sort.cost.list":{
                templateUrl : "root/initialize/sort/cost/list/delete/_res/html/index.html",
                controller:'costDeleteCtrl'
            }
        }
    })
});