/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('liabilitiesList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.sort.liabilities.list",{
        url:"/list",
        views:{
            "content@root.initialize.sort.liabilities":{
                templateUrl : "root/initialize/sort/liabilities/list/_res/html/index.html",
                controller:'liabilitiesListCtrl'
            }
        }
    }).state("root.initialize.sort.liabilities.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.initialize.sort.liabilities.list":{
                templateUrl : "root/initialize/sort/liabilities/list/delete/_res/html/index.html",
                controller:'liabilitiesDeleteCtrl'
            }
        }
    })
});