
var app = angular.module('registeredList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.registered.list",{
        url:"/list",
        views:{
            "content@root.compete.registered":{
                templateUrl : "root/compete/registered/list/_res/html/index.html",
                controller:'registeredListCtrl'
            }
        }
    }).state("root.compete.registered.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.compete.registered.list":{
                templateUrl : "root/compete/registered/list/delete/_res/html/index.html",
                controller:'registeredDeleteCtrl'
            }
        }
    })
});