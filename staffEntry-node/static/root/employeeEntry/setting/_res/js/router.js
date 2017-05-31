var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.employeeEntry.setting", {
        url : "/setting",
        views : {
            "content@root.employeeEntry" : {
                templateUrl : "root/employeeEntry/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.employeeEntry" : {
                templateUrl : "root/employeeEntry/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.employeeEntry.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.employeeEntry.setting":{
                templateUrl : "root/employeeEntry/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.employeeEntry.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.employeeEntry.setting":{
                templateUrl : "root/employeeEntry/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});