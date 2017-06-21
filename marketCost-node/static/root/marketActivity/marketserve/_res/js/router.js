var app = angular.module('marketserve', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.marketActivity.marketserve", {
        url : "/marketserve",
        views : {// marketActivity  
            "content@root.marketActivity" : {
                templateUrl : "root/marketActivity/marketserve/_res/html/index.html",
                controller:"marketserveCtrl"
            },"menu@root.marketActivity" : {
                templateUrl : "root/marketActivity/marketserve/_res/html/menu.html",
                controller:"marketserveMenuCtrl"
            }
        }
    }).state("root.marketActivity.marketserve.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/add/_res/html/index.html",
                controller:'marketserveAddCtrl'
            }
        }
    }).state("root.marketActivity.marketserve.addcustomer[12]",{
        url:"/addcustomer[12]?id=",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/addcustomer/_res/html/index.html",
                controller:'marketserveAddcustomerCtrl'
            }
        }
    }).state("root.marketActivity.marketserve.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/edit/_res/html/index.html",
                controller:'companyEditCtrl'
            }
        }
    }).state("root.marketActivity.marketserve.organize[12]",{
        url:"/organize[12]?id=",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/organize/_res/html/index.html",
                controller:'marketserveOrganizeCtr'
            }
        }
    }).state("root.marketActivity.marketserve.executiveOpinion[12]",{
        url:"/executiveOpinion[12]?id=",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/executiveOpinion/_res/html/index.html",
                controller:'mExecutiveOpinionCtr'
            }
        }
    }).state("root.marketActivity.marketserve.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.marketActivity.marketserve":{
                templateUrl : "root/marketActivity/marketserve/view/_res/html/index.html",
                controller:'mviewCtr'
            }
        }
    })
});