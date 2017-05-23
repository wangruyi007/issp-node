var app = angular.module('entryRegister', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.employeeEntry.entryRegister", {
        url : "/entryRegister",
        views : {  
            "content@root.employeeEntry" : {
                templateUrl : "root/employeeEntry/entryRegister/_res/html/index.html",
                controller:"entryRegisterCtrl"
            },"menu@root.employeeEntry" : {
                templateUrl : "root/employeeEntry/entryRegister/_res/html/menu.html",
                controller:"entryRegisterMenuCtrl"
            }
        }
    }).state("root.employeeEntry.entryRegister.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.employeeEntry.entryRegister":{
                templateUrl : "root/employeeEntry/entryRegister/add/_res/html/index.html",
                controller:'entryRegisterAddCtrl'
            }
        }
    }).state("root.employeeEntry.entryRegister.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.employeeEntry.entryRegister":{
                templateUrl : "root/employeeEntry/entryRegister/edit/_res/html/index.html",
                controller:'entryRegisterEditCtrl'
            }
        }
    }).state("root.employeeEntry.entryRegister.auditDetail[12]",{
        url:"/auditDetail[12]?id=",
        views:{
            "content@root.employeeEntry.entryRegister":{
                templateUrl : "root/employeeEntry/entryRegister/auditDetail/_res/html/index.html",
                controller:'auditDetailCtrl'
            }
        }
    })
});