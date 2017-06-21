/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('firstsubjectList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.setting.firstsubject.list",{
        url:"/list",
        views:{
            "content@root.initialize.setting.firstsubject":{
                templateUrl : "root/initialize/setting/firstsubject/list/_res/html/index.html",
                controller:'firstsubjectListCtrl'
            }
        }
    }).state("root.initialize.setting.firstsubject.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.initialize.setting.firstsubject.list":{
                templateUrl : "root/initialize/setting/firstsubject/list/delete/_res/html/index.html",
                controller:'firstsubjectDeleteCtrl'
            }
        }
    })
});