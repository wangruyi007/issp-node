/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('smuiList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.interface.smui.list",{
        url:"/list",
        views:{
            "content@root.projectmeasure.interface.smui":{
                templateUrl : "root/projectmeasure/interface/smui/list/_res/html/index.html",
                controller:'smuiListCtrl'
            }
        }
    }).state("root.projectmeasure.interface.smui.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.projectmeasure.interface.smui.list":{
                templateUrl : "root/projectmeasure/interface/smui/list/delete/_res/html/index.html",
                controller:'smuiDeleteCtrl'
            }
        }
    })
});