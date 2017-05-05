var app = angular.module('summary',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.projectmeasure.summary", {
        url: "/summary",
        views: {
            "content@root": {
                templateUrl: "root/projectmeasure/summary/_res/html/index.html",
                controller: "summaryCtrl"
            }
        }
    })
})