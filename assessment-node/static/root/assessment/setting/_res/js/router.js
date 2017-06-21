var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.setting", {
        url : "/setting",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.assessment.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.assessment.setting":{
                templateUrl : "root/assessment/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.assessment.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.assessment.setting":{
                templateUrl : "root/assessment/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});