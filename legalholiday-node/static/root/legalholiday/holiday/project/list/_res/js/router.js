/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('projectList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.legalholiday.holiday.project.list",{
        url:"/list",
        views:{
            "content@root.legalholiday.holiday.project":{
                templateUrl : "root/legalholiday/holiday/project/list/_res/html/index.html",
                controller:'projectListCtrl'
            }
        }
    }).state("root.legalholiday.holiday.project.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.legalholiday.holiday.project.list":{
                templateUrl : "root/legalholiday/holiday/project/list/delete/_res/html/index.html",
                controller:'projectDeleteCtrl'
            }
        }
    })
});