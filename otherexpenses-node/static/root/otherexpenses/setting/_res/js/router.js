var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.otherexpenses.setting", {
        url : "/setting",
        views : {
            "content@root.otherexpenses" : {
                templateUrl : "root/otherexpenses/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.otherexpenses" : {
                templateUrl : "root/otherexpenses/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.otherexpenses.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.otherexpenses.setting":{
                templateUrl : "root/otherexpenses/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.otherexpenses.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.otherexpenses.setting":{
                templateUrl : "root/otherexpenses/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});