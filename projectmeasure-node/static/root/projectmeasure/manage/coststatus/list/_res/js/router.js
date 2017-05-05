/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('coststatusList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.manage.coststatus.list",{
        url:"/list",
        views:{
            "content@root.projectmeasure.manage.coststatus":{
                templateUrl : "root/projectmeasure/manage/coststatus/list/_res/html/index.html",
                controller:'coststatusListCtrl'
            }
        }
    }).state("root.projectmeasure.manage.coststatus.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.projectmeasure.manage.coststatus.list":{
                templateUrl : "root/projectmeasure/manage/coststatus/list/delete/_res/html/index.html",
                controller:'coststatusDeleteCtrl'
            }
        }
    })
});