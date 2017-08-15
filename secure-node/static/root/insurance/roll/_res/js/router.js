var app = angular.module('roll', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.insurance.roll", {
        url : "/roll",
        views : {
            "content@root.insurance" : {
                templateUrl : "root/insurance/roll/_res/html/index.html",
                controller:"rollCtrl"
            },"menu@root.insurance" : {
                templateUrl : "root/insurance/roll/_res/html/menu.html",
                controller:"rollMenuCtrl"
            }
        }
    }).state("root.insurance.roll.list[12]",{
        url:"/list[12]?id=&name=&page=&removeName=&employeeId=",
        views:{
            "content@root.insurance.roll":{
                templateUrl : "root/insurance/roll/list/_res/html/index.html",
                controller:'rollListCtrl'
            }
        }
    }).state("root.insurance.roll.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.insurance.roll":{
                templateUrl : "root/insurance/roll/edit/_res/html/index.html",
                controller:'rollEditCtrl'
            }
        }
    })
});