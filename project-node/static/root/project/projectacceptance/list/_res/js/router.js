/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('projectacceptanceList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.projectacceptance.list",{
        url:"/list",
        views:{
            "content@root.project.projectacceptance":{
                templateUrl : "root/project/projectacceptance/list/_res/html/index.html",
                controller:'projectacceptanceListCtrl'
            }
        }
    }).state("root.project.projectacceptance.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.project.projectacceptance.list":{
                templateUrl : "root/project/projectacceptance/list/delete/_res/html/index.html",
                controller:'projectacceptanceDeleteCtrl'
            }
        }
    })
});