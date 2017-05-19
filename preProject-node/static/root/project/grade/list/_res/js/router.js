var app = angular.module('gradeList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.grade.list",{
        url:"/list",
        views:{
            "content@root.project.grade":{
                templateUrl : "root/project/grade/list/_res/html/index.html",
                controller:'gradeListCtrl'
            }
        }
    }).state("root.project.grade.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.project.grade.list":{
                templateUrl : "root/project/grade/list/delete/_res/html/index.html",
                controller:'gradeDeleteCtrl'
            }
        }
    })
});