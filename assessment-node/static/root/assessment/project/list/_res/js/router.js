var app = angular.module('projectList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.project.list",{
        url:"/list",
        views:{
            "content@root.assessment.project":{
                templateUrl : "root/assessment/project/list/_res/html/index.html",
                controller:'projectListCtrl'
            }
        }
    }).state("root.assessment.project.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.assessment.project.list":{
                templateUrl : "root/assessment/project/list/delete/_res/html/index.html",
                controller:'projectDeleteCtrl'
            }
        }
     })
});