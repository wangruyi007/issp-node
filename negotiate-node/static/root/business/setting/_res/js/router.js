var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.business.setting", {
        url : "/setting",
        views : {
            "content@root.business" : {
                templateUrl : "root/business/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.business" : {
                templateUrl : "root/business/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.business.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.business.setting":{
                templateUrl : "root/business/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.business.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.business.setting":{
                templateUrl : "root/business/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});