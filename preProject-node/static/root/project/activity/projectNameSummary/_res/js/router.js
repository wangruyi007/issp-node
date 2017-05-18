var app = angular.module('actProjectNameSummary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.activity.projectNameSummary",{
        url:"/projectNameSummary",
        views:{
            "content@root.project.activity":{
                templateUrl : "root/project/activity/projectNameSummary/_res/html/index.html",
                controller:'actProjectNameSummaryCtrl'
            }
        }
    })
});
