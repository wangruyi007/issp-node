var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessInteraction.setting", {
        url : "/setting",
        views : {
            "content@root.businessInteraction" : {
                templateUrl : "root/businessInteraction/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.businessInteraction" : {
                templateUrl : "root/businessInteraction/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.businessInteraction.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.businessInteraction.setting":{
                templateUrl : "root/businessInteraction/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.businessInteraction.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.businessInteraction.setting":{
                templateUrl : "root/businessInteraction/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});