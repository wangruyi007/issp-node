var app = angular.module('payedList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.payed.list",{
        url:"/list",
        views:{
            "content@root.compete.payed":{
                templateUrl : "root/compete/payed/list/_res/html/index.html",
                controller:'payedListCtrl'
            }
        }
    }).state("root.compete.payed.list.first[12]",{
        url:"/first[12]?id=",
        views:{
            "content@root.compete.payed":{
                templateUrl : "root/compete/payed/list/first/_res/html/index.html",
                controller:'payedFirstCtrl'
            }
        }
    }).state("root.compete.payed.list.second[12]",{
        url:"/second[12]?id=",
        views:{
            "content@root.compete.payed":{
                templateUrl : "root/compete/payed/list/second/_res/html/index.html",
                controller:'payedSecondCtrl'
            }
        }
    })
});