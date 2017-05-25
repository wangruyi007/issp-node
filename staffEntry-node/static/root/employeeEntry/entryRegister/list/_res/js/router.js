var app = angular.module('entryRegisterList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.employeeEntry.entryRegister.list",{
        url:"/list",
        views:{
            "content@root.employeeEntry.entryRegister":{
                templateUrl : "root/employeeEntry/entryRegister/list/_res/html/index.html",
                controller:'entryRegisterListCtrl'
            }
        }
    }).state("root.employeeEntry.entryRegister.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.employeeEntry.entryRegister.list":{
                templateUrl : "root/employeeEntry/entryRegister/list/delete/_res/html/index.html",
                controller:'DeleteCtrl'
            }
        }
    })
});