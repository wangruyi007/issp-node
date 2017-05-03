var app = angular.module('tenderQuestion', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.tenderQuestion", {
        url : "/tenderQuestion",
        views : {
            "content@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/tenderQuestion/_res/html/index.html",
                controller:"questionCtrl"
            },"menu@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/tenderQuestion/_res/html/menu.html",
                controller:"questionMenuCtrl"
            }
        }
    }).state("root.biddingManagement.tenderQuestion.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.biddingManagement.tenderQuestion":{
                templateUrl : "root/biddingManagement/tenderQuestion/add/_res/html/index.html",
                controller:'questionAddCtrl'
            }
        }
    }).state("root.biddingManagement.tenderQuestion.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.biddingManagement.tenderQuestion":{
                templateUrl : "root/biddingManagement/tenderQuestion/edit/_res/html/index.html",
                controller:'questionEditCtrl'
            }
        }
    })
});