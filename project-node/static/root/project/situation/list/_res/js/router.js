/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('situationList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.situation.list",{
        url:"/list",
        views:{
            "content@root.project.situation":{
                templateUrl : "root/project/situation/list/_res/html/index.html",
                controller:'situationListCtrl'
            }
        }
    }).state("root.project.situation.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.project.situation.list":{
                templateUrl : "root/project/situation/list/delete/_res/html/index.html",
                controller:'situationDeleteCtrl'
            }
        }
    })
});