var app = angular.module('legalholiday',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.legalholiday", {
        url: "/legalholiday",
        views: {
            "content@root": {
                templateUrl: "root/legalholiday/_res/html/index.html",
                controller: "legalholidayCtrl"
            },"nav@root": {
                templateUrl: "root/legalholiday/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})