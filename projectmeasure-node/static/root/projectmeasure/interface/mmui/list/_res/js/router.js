/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('mmuiList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.interface.mmui.list",{
        url:"/list",
        views:{
            "content@root.projectmeasure.interface.mmui":{
                templateUrl : "root/projectmeasure/interface/mmui/list/_res/html/index.html",
                controller:'mmuiListCtrl'
            }
        }
    }).state("root.projectmeasure.interface.mmui.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.projectmeasure.interface.mmui.list":{
                templateUrl : "root/projectmeasure/interface/mmui/list/delete/_res/html/index.html",
                controller:'mmuiDeleteCtrl'
            }
        }
    })
});