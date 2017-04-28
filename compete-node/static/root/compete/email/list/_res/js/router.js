/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('emailList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.email.list",{
        url:"/list",
        views:{
            "content@root.compete.email":{
                templateUrl : "root/compete/email/list/_res/html/index.html",
                controller:'emailListCtrl'
            }
        }
    }).state("root.compete.email.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.compete.email.list":{
                templateUrl : "root/compete/email/list/delete/_res/html/index.html",
                controller:'emailDeleteCtrl'
            }
        }
    }).state("root.compete.email.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.compete.email.list":{
                templateUrl : "root/compete/email/list/congeal/_res/html/index.html",
                controller:'emailCongealCtrl'
            }
        }
    }).state("root.compete.email.list.unfreeze[12]",{
        url:"/unfreeze[12]?id=",
        views:{
            "modal@root.compete.email.list":{
                templateUrl : "root/compete/email/list/unfreeze/_res/html/index.html",
                controller:'emailUnfreezeCtrl'
            }
        }
    })
});