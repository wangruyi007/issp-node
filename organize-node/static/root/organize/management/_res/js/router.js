var app = angular.module('management', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management", {
        url : "/management",
        views : {
            "content@root.organize" : {
                templateUrl : "root/organize/management/_res/html/index.html",
                controller:"managementCtrl"
            }
        }
    })
});

