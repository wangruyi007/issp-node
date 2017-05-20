var app = angular.module('discussDetails', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessInteraction.discussDetails", {
        url : "/discussDetails",
        views : {
            "content@root.businessInteraction" : {
                templateUrl : "root/businessInteraction/discussDetails/_res/html/index.html",
                controller:"discussCtrl"
            },"menu@root.businessInteraction" : {
                templateUrl : "root/businessInteraction/discussDetails/_res/html/menu.html",
                controller:"discussMenuCtrl"
            }
        }
    }).state("root.businessInteraction.discussDetails.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.businessInteraction.discussDetails":{
                templateUrl : "root/businessInteraction/discussDetails/add/_res/html/index.html",
                controller:'discussAddCtrl'
            }
        }
    }).state("root.businessInteraction.discussDetails.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.businessInteraction.discussDetails":{
                templateUrl : "root/businessInteraction/discussDetails/edit/_res/html/index.html",
                controller:'discussEditCtrl'
            }
        }
    })
});