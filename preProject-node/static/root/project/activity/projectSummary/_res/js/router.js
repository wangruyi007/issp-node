var app = angular.module('activityProjectSummary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.activity.projectSummary",{
        url:"/projectSummary",
        views:{
            "content@root.project.activity":{
                templateUrl : "root/project/activity/projectSummary/_res/html/index.html",
                controller:'activityProjectSummaryCtrl'
            }
        }
    })
});
