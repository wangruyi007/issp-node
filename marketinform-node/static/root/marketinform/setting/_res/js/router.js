var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.marketinform.setting", {
        url : "/setting",
        views : {
            "content@root.marketinform" : {
                templateUrl : "root/marketinform/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.marketinform" : {
                templateUrl : "root/marketinform/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.marketinform.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.marketinform.setting":{
                templateUrl : "root/marketinform/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.marketinform.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.marketinform.setting":{
                templateUrl : "root/marketinform/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});