/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('settlementList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.settlement.list",{
        url:"/list",
        views:{
            "content@root.project.settlement":{
                templateUrl : "root/project/settlement/list/_res/html/index.html",
                controller:'settlementListCtrl'
            }
        }
    }).state("root.project.settlement.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.project.settlement.list":{
                templateUrl : "root/project/settlement/list/delete/_res/html/index.html",
                controller:'settlementDeleteCtrl'
            }
        }
    })
});