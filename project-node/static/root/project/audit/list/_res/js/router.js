/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('auditList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.audit.list",{
        url:"/list",
        views:{
            "content@root.project.audit":{
                templateUrl : "root/project/audit/list/_res/html/index.html",
                controller:'auditListCtrl'
            }
        }
    }).state("root.project.audit.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.project.audit.list":{
                templateUrl : "root/project/audit/list/delete/_res/html/index.html",
                controller:'auditDeleteCtrl'
            }
        }
    })
});