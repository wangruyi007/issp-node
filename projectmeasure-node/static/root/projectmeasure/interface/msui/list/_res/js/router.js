/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('msuiList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.interface.msui.list",{
        url:"/list",
        views:{
            "content@root.projectmeasure.interface.msui":{
                templateUrl : "root/projectmeasure/interface/msui/list/_res/html/index.html",
                controller:'msuiListCtrl'
            }
        }
    }).state("root.projectmeasure.interface.msui.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.projectmeasure.interface.msui.list":{
                templateUrl : "root/projectmeasure/interface/msui/list/delete/_res/html/index.html",
                controller:'msuiDeleteCtrl'
            }
        }
    })
});