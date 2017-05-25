var app = angular.module('questionList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.tenderQuestion.list",{
        url:"/list",
        views:{
            "content@root.biddingManagement.tenderQuestion":{
                templateUrl : "root/biddingManagement/tenderQuestion/list/_res/html/index.html",
                controller:'questionListCtrl'
            }
        }
    }).state("root.biddingManagement.tenderQuestion.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.biddingManagement.tenderQuestion.list":{
                templateUrl : "root/biddingManagement/tenderQuestion/list/delete/_res/html/index.html",
                controller:'questionDeleteCtrl'
            }
        }
     })
});