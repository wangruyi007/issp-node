var app = angular.module('confirmed', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.confirmed", {
        url : "/confirmed",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/confirmed/_res/html/index.html",
                controller:"confirmedCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/confirmed/_res/html/menu.html",
                controller:"confirmedMenuCtrl"
            }
        }
    })
});