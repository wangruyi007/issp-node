var app = angular.module('servereCord', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.marketActivity.servereCord", {
        url : "/servereCord",
        views : {
            "content@root.marketActivity" : {
                templateUrl : "root/marketActivity/servereCord/_res/html/index.html",
                controller:"servereCordCtrl"
            },"menu@root.marketActivity" : {
                templateUrl : "root/marketActivity/servereCord/_res/html/menu.html",
                controller:"servereCordMenuCtrl"
            }
        }
    }).state("root.marketActivity.servereCord.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/add/_res/html/index.html",
                controller:'serverecordAddCtrl'
            }
        }
    }).state("root.marketActivity.servereCord.addcustomer[12]",{
        url:"/addcustomer[12]",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/addcustomer/_res/html/index.html",
                controller:'servereCordAddcustomerCtrl'
            }
        }
    }).state("root.marketActivity.servereCord.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/edit/_res/html/index.html",
                controller:'companyEditCtrl'
            }
        }
    }).state("root.marketActivity.servereCord.organize[12]",{
        url:"/organize[12]?id=",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/organize/_res/html/index.html",
                controller:'servereCordOrganizeCtr'
            }
        }
    }).state("root.marketActivity.servereCord.executiveOpinion[12]",{
        url:"/executiveOpinion[12]?id=",
        views:{
            "content@root.marketActivity.servereCord":{
                templateUrl : "root/marketActivity/servereCord/executiveOpinion/_res/html/index.html",
                controller:'servercordOpinionCtr'
            }
        }
    })
});