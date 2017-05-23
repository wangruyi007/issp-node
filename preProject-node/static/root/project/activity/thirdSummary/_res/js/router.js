var app = angular.module('activityThirdSummary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.activity.thirdSummary",{
        url:"/thirdSummary",
        views:{
            "content@root.project.activity":{
                templateUrl : "root/project/activity/thirdSummary/_res/html/index.html",
                controller:'activityThirdSummaryCtrl'
            }
        }
    })
});
