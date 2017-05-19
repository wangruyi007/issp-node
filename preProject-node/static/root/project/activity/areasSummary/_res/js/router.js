var app = angular.module('activityAreaSummary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.activity.areasSummary",{
        url:"/areasSummary",
        views:{
            "content@root.project.activity":{
                templateUrl : "root/project/activity/areasSummary/_res/html/index.html",
                controller:'activityAreaSummaryCtrl'
            }
        }
    })
});
