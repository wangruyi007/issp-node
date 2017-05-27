var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.marketActivity.setting", {
        url : "/setting",
        views : {
            "content@root.marketActivity" : {
                templateUrl : "root/marketActivity/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.marketActivity" : {
                templateUrl : "root/marketActivity/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.marketActivity.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.marketActivity.setting":{
                templateUrl : "root/marketActivity/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.marketActivity.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.marketActivity.setting":{
                templateUrl : "root/marketActivity/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});