var app = angular.module('postedList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recordAccount.posted.list",{
        url:"/list",
        views:{
            "content@root.recordAccount.posted":{
                templateUrl : "root/recordAccount/posted/list/_res/html/index.html",
                controller:'postedListCtrl'
            }
        }
    }).state("root.recordAccount.posted.list.bill[12]",{
        url:"/bill[12]?ids=",
        views:{
            "modal@root.recordAccount.posted.list":{
                templateUrl : "root/recordAccount/posted/list/bill/_res/html/index.html",
                controller:'billCtrl'
            }
        }
     }).state("root.recordAccount.posted.list.postponement[12]",{
        url:"/postponement[12]?id=",
        views:{
            "modal@root.recordAccount.posted.list":{
                templateUrl : "root/recordAccount/posted/list/postponement/_res/html/index.html",
                controller:'postponementCtrl'
            }
        }
     })
});