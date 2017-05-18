var app = angular.module('warningList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.warning.list",{
        url:"/list",
        views:{
            "content@root.project.warning":{
                templateUrl : "root/project/warning/list/_res/html/index.html",
                controller:'warningListCtrl'
            }
        }
    }).state("root.project.warning.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.project.warning.list":{
                templateUrl : "root/project/warning/list/delete/_res/html/index.html",
                controller:'warningDeleteCtrl'
            }
        }
    })
});