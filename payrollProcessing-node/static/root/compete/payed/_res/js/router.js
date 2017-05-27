var app = angular.module('payed', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.payed", {
        url : "/payed",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/payed/_res/html/index.html",
                controller:"payedCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/payed/_res/html/menu.html",
                controller:"payedMenuCtrl"
            }
        }
    })
});