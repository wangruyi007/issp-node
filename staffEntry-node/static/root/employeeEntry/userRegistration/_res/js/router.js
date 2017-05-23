var app = angular.module('userRegistration', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.employeeEntry.userRegistration", {
        url : "/userRegistration",
        views : {  
            "content@root.employeeEntry" : {
                templateUrl : "root/employeeEntry/userRegistration/_res/html/index.html",
                controller:"userRegistrationCtrl"
            },"menu@root.employeeEntry" : {
                templateUrl : "root/employeeEntry/userRegistration/_res/html/menu.html",
                controller:"userRegistrationMenuCtrl"
            }
        }
    }).state("root.employeeEntry.userRegistration.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.employeeEntry.userRegistration":{
                templateUrl : "root/employeeEntry/userRegistration/add/_res/html/index.html",
                controller:'userRegistrationAddCtrl'
            }
        }
    }).state("root.employeeEntry.userRegistration.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.employeeEntry.userRegistration":{
                templateUrl : "root/employeeEntry/userRegistration/edit/_res/html/index.html",
                controller:'userRegistrationEditCtrl'
            }
        }
    })
});