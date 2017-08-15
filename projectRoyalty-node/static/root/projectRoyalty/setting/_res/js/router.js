var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectRoyalty.setting", {
        url : "/setting",
        views : {
            "content@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.projectRoyalty.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectRoyalty.setting":{
                templateUrl : "root/projectRoyalty/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.projectRoyalty.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.projectRoyalty.setting":{
                templateUrl : "root/projectRoyalty/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});