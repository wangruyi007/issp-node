var app = angular.module('salaryConfirm', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.employeeEntry.salaryConfirm", {
        url : "/salaryConfirm",
        views : {  
            "content@root.employeeEntry" : {
                templateUrl : "root/employeeEntry/salaryConfirm/_res/html/index.html",
                controller:"salaryConfirmCtrl"
            },"menu@root.employeeEntry" : {
                templateUrl : "root/employeeEntry/salaryConfirm/_res/html/menu.html",
                controller:"salaryConfirmMenuCtrl"
            }
        }
    }).state("root.employeeEntry.salaryConfirm.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.employeeEntry.salaryConfirm":{
                templateUrl : "root/employeeEntry/salaryConfirm/add/_res/html/index.html",
                controller:'salaryConfirmAddCtrl'
            }
        }
    }).state("root.employeeEntry.salaryConfirm.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.employeeEntry.salaryConfirm":{
                templateUrl : "root/employeeEntry/salaryConfirm/edit/_res/html/index.html",
                controller:'salaryConfirmEditCtrl'
            }
        }
    })
});