var app = angular.module('companyM', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.express.company", {
        url : "/company",
        views : {
            "content@root.express" : {
                templateUrl : "root/express/company/_res/html/index.html",
                controller:"companyCtrl"
            },"menu@root.express" : {
                templateUrl : "root/express/company/_res/html/menu.html",
                controller:"companyMenuCtrl"
            }
        }
    }).state("root.express.company.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.express.company":{
                templateUrl : "root/express/company/list/_res/html/index.html",
                controller:'companyListCtrl'
            }
        }
    }).state("root.express.company.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.express.company":{
                templateUrl : "root/express/company/add/_res/html/index.html",
                controller:'companyAddCtrl'
            }
        }
    }).state("root.express.company.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.express.company":{
                templateUrl : "root/express/company/edit/_res/html/index.html",
                controller:'companyEditCtrl'
            }
        }
    })
});