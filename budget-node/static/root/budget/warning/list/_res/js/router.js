var app = angular.module('warningList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.budget.warning.list",{
        url:"/list",
        views:{
            "content@root.budget.warning":{
                templateUrl : "root/budget/warning/list/_res/html/index.html",
                controller:'warningListCtrl'
            }
        }
    }).state("root.budget.warning.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.budget.warning.list":{
                templateUrl : "root/budget/warning/list/delete/_res/html/index.html",
                controller:'warningDeleteCtrl'
            }
        }
    })
});