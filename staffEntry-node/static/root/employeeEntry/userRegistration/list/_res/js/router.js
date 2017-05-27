
var app = angular.module('userRegistrationList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.employeeEntry.userRegistration.list",{
        url:"/list",
        views:{
            "content@root.employeeEntry.userRegistration":{
                templateUrl : "root/employeeEntry/userRegistration/list/_res/html/index.html",
                controller:'userRegistrationListCtrl'
            }
        }
    }).state("root.employeeEntry.userRegistration.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.employeeEntry.userRegistration.list":{
                templateUrl : "root/employeeEntry/userRegistration/list/delete/_res/html/index.html",
                controller:'DeleteCtrl'
            }
        }
    })
});