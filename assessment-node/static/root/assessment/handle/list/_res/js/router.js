var app = angular.module('handleList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.handle.list",{
        url:"/list",
        views:{
            "content@root.assessment.handle":{
                templateUrl : "root/assessment/handle/list/_res/html/index.html",
                controller:'handleListCtrl'
            }
        }
    }).state("root.assessment.handle.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.assessment.handle.list":{
                templateUrl : "root/assessment/handle/list/delete/_res/html/index.html",
                controller:'handleDeleteCtrl'
            }
        }
     })
});