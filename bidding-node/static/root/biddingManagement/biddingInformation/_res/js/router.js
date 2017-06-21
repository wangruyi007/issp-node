var app = angular.module('biddingInformation', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.biddingInformation", {
        url : "/biddingInformation",
        views : {
            "content@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/biddingInformation/_res/html/index.html",
                controller:"informationCtrl"
            },"menu@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/biddingInformation/_res/html/menu.html",
                controller:"infoMenuCtrl"
            }
        }
    }).state("root.biddingManagement.biddingInformation.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.biddingManagement.biddingInformation":{
                templateUrl : "root/biddingManagement/biddingInformation/add/_res/html/index.html",
                controller:'infoAddCtrl'
            }
        }
    }).state("root.biddingManagement.biddingInformation.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.biddingManagement.biddingInformation":{
                templateUrl : "root/biddingManagement/biddingInformation/edit/_res/html/index.html",
                controller:'infoEditCtrl'
            }
        }
    }).state("root.biddingManagement.biddingInformation.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.biddingManagement.biddingInformation":{
                templateUrl : "root/biddingManagement/biddingInformation/summary/_res/html/index.html",
                controller:'summaryCtrl'
            }
        }
    })
});