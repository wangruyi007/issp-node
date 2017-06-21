var app = angular.module('emailList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.marketActivity.email.list",{
        url:"/list",
        views:{
            "content@root.marketActivity.email":{
                templateUrl : "root/marketActivity/email/list/_res/html/index.html",
                controller:'emailListCtrl'
            }
        }
    }).state("root.marketActivity.email.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.marketActivity.email.list":{
                templateUrl : "root/marketActivity/email/list/delete/_res/html/index.html",
                controller:'emailDeleteCtrl'
            }
        }
    }).state("root.marketActivity.email.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.marketActivity.email.list":{
                templateUrl : "root/marketActivity/email/list/congeal/_res/html/index.html",
                controller:'emailCongealCtrl'
            }
        }
    }).state("root.marketActivity.email.list.unfreeze[12]",{
        url:"/unfreeze[12]?id=",
        views:{
            "modal@root.marketActivity.email.list":{
                templateUrl : "root/marketActivity/email/list/unfreeze/_res/html/index.html",
                controller:'emailUnfreezeCtrl'
            }
        }
    })
});