var app = angular.module('emailList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.summary.email.list",{
        url:"/list",
        views:{
            "content@root.projectmeasure.summary.email":{
                templateUrl : "root/projectmeasure/summary/email/list/_res/html/index.html",
                controller:'emailListCtrl'
            }
        }
    }).state("root.projectmeasure.summary.email.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.projectmeasure.summary.email.list":{
                templateUrl : "root/projectmeasure/summary/email/list/delete/_res/html/index.html",
                controller:'emailDeleteCtrl'
            }
        }
    }).state("root.projectmeasure.summary.email.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.projectmeasure.summary.email.list":{
                templateUrl : "root/projectmeasure/summary/email/list/congeal/_res/html/index.html",
                controller:'emailCongealCtrl'
            }
        }
    }).state("root.projectmeasure.summary.email.list.unfreeze[12]",{
        url:"/unfreeze[12]?id=",
        views:{
            "modal@root.projectmeasure.summary.email.list":{
                templateUrl : "root/projectmeasure/summary/email/list/unfreeze/_res/html/index.html",
                controller:'emailUnfreezeCtrl'
            }
        }
    })
});