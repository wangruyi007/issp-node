var app = angular.module('implementationList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.implementation.list",{
        url:"/list",
        views:{
            "content@root.project.implementation":{
                templateUrl : "root/project/implementation/list/_res/html/index.html",
                controller:'implementationListCtrl'
            }
        }
    }).state("root.project.implementation.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.project.implementation.list":{
                templateUrl : "root/project/implementation/list/delete/_res/html/index.html",
                controller:'implementationListDeleteCtrl'
            }
        }
    })
});