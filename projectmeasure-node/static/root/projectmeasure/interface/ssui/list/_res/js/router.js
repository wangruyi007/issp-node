var app = angular.module('ssuiList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.interface.ssui.list",{
        url:"/list",
        views:{
            "content@root.projectmeasure.interface.ssui":{
                templateUrl : "root/projectmeasure/interface/ssui/list/_res/html/index.html",
                controller:'ssuiListCtrl'
            }
        }
    }).state("root.projectmeasure.interface.ssui.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.projectmeasure.interface.ssui.list":{
                templateUrl : "root/projectmeasure/interface/ssui/list/delete/_res/html/index.html",
                controller:'ssuiDeleteCtrl'
            }
        }
    })
});