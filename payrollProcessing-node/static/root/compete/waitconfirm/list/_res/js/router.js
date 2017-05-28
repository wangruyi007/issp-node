var app = angular.module('waitconfirmList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.waitconfirm.list",{
        url:"/list",
        views:{
            "content@root.compete.waitconfirm":{
                templateUrl : "root/compete/waitconfirm/list/_res/html/index.html",
                controller:'waitconfirmListCtrl'
            }
        }
    }).state("root.compete.waitconfirm.list.notarize[12]",{
        url:"/notarize[12]?id=",
        views:{
            "modal@root.compete.waitconfirm.list":{
                templateUrl : "root/compete/waitconfirm/list/notarize/_res/html/index.html",
                controller:'waitconfirmNotarizeCtrl'
            }
        }
    })
});