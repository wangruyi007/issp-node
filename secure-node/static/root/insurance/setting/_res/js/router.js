var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.insurance.setting", {
        url : "/setting",
        views : {
            "content@root.insurance" : {
                templateUrl : "root/insurance/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.insurance" : {
                templateUrl : "root/insurance/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.insurance.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.insurance.setting":{
                templateUrl : "root/insurance/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.insurance.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.insurance.setting":{
                templateUrl : "root/insurance/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});