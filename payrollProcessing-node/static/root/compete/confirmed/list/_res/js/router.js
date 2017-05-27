var app = angular.module('confirmedList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.confirmed.list",{
        url:"/list",
        views:{
            "content@root.compete.confirmed":{
                templateUrl : "root/compete/confirmed/list/_res/html/index.html",
                controller:'confirmedListCtrl'
            }
        }
    }).state("root.compete.confirmed.list.first[12]",{
        url:"/first[12]?id=",
        views:{
            "content@root.compete.confirmed":{
                templateUrl : "root/compete/confirmed/list/first/_res/html/index.html",
                controller:'confirmedFirstCtrl'
            }
        }
    }).state("root.compete.confirmed.list.second[12]",{
        url:"/second[12]?id=",
        views:{
            "content@root.compete.confirmed":{
                templateUrl : "root/compete/confirmed/list/second/_res/html/index.html",
                controller:'confirmedSecondCtrl'
            }
        }
    })
});