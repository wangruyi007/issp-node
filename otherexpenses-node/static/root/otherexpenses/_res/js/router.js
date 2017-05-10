var app = angular.module('otherexpenses',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.otherexpenses", {
        url: "/otherexpenses",
        views: {
            "content@root": {
                templateUrl: "root/otherexpenses/_res/html/index.html",
                controller: "otherexpensesCtrl"
            },"nav@root": {
                templateUrl: "root/otherexpenses/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})