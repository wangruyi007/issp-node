
var app = angular.module('salaryConfirmList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.employeeEntry.salaryConfirm.list",{
        url:"/list",
        views:{
            "content@root.employeeEntry.salaryConfirm":{
                templateUrl : "root/employeeEntry/salaryConfirm/list/_res/html/index.html",
                controller:'salaryConfirmListCtrl'
            }
        }
    }).state("root.employeeEntry.salaryConfirm.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.employeeEntry.salaryConfirm.list":{
                templateUrl : "root/employeeEntry/salaryConfirm/list/delete/_res/html/index.html",
                controller:'DeleteCtrl'
            }
        }
    })
});