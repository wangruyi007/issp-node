var app = angular.module('activitySecondSummary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.activity.secondSummary",{
        url:"/secondSummary",
        views:{
            "content@root.project.activity":{
                templateUrl : "root/project/activity/secondSummary/_res/html/index.html",
                controller:'activitySecondSummaryCtrl'
            }
        }
    })
});
