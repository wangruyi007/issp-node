/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('informationList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.information.list",{
        url:"/list",
        views:{
            "content@root.compete.information":{
                templateUrl : "root/compete/information/list/_res/html/index.html",
                controller:'informationListCtrl'
            }
        }
    }).state("root.compete.information.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.compete.information.list":{
                templateUrl : "root/compete/information/list/delete/_res/html/index.html",
                controller:'informationDeleteCtrl'
            }
        }
    }).state("root.compete.information.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.compete.information.list":{
                templateUrl : "root/compete/information/list/congeal/_res/html/index.html",
                controller:'informationCongealCtrl'
            }
        }
    }).state("root.compete.information.list.unfreeze[12]",{
        url:"/unfreeze[12]?id=",
        views:{
            "modal@root.compete.information.list":{
                templateUrl : "root/compete/information/list/unfreeze/_res/html/index.html",
                controller:'informationUnfreezeCtrl'
            }
        }
    })
});