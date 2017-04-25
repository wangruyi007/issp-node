var app = angular.module('subjectsList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.other.directionSubjects.list",{
        url:"/list",
        views:{
            "content@root.developProgress.other.directionSubjects":{
                templateUrl : "root/developProgress/other/directionSubjects/list/_res/html/index.html",
                controller:'subjectsListCtrl'
            }
        }
    }).state("root.developProgress.other.directionSubjects.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.developProgress.other.directionSubjects.list":{
                templateUrl : "root/developProgress/other/directionSubjects/list/delete/_res/html/index.html",
                controller:'subjectsDeleteCtrl'
            }
        }
     }).state("root.developProgress.other.directionSubjects.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.developProgress.other.directionSubjects.list":{
                templateUrl : "root/developProgress/other/directionSubjects/list/congeal/_res/html/index.html",
                controller:'subjectsCongealCtrl'
            }
        }
    })
});