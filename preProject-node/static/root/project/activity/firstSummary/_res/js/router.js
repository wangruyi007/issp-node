var app = angular.module('activityFirstSummary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.activity.firstSummary",{
        url:"/firstSummary",
        views:{
            "content@root.project.activity":{
                templateUrl : "root/project/activity/firstSummary/_res/html/index.html",
                controller:'activityFirstSummaryCtrl'
            }
        }
    })
});
