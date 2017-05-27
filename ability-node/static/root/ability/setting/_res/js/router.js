var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ability.setting", {
        url : "/setting",
        views : {
            "content@root.ability" : {
                templateUrl : "root/ability/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.ability" : {
                templateUrl : "root/ability/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.ability.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.ability.setting":{
                templateUrl : "root/ability/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.ability.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.ability.setting":{
                templateUrl : "root/ability/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});