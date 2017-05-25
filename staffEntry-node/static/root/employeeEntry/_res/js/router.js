var app = angular.module('employeeEntry',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.employeeEntry", {
        url: "/employeeEntry",
        views: {
            "content@root": {
                templateUrl: "root/employeeEntry/_res/html/index.html",
                controller: "employeeEntryCtrl"
            },"nav@root":{
                templateUrl: "root/employeeEntry/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})