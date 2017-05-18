var app = angular.module('activityList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.activity.list",{
        url:"/list",
        views:{
            "content@root.project.activity":{
                templateUrl : "root/project/activity/list/_res/html/index.html",
                controller:'activityListCtrl'
            }
        }
    })
});