var app = angular.module('personList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.person.list",{
        url:"/list",
        views:{
            "content@root.organize.management.person":{
                templateUrl : "root/organize/management/person/list/_res/html/index.html",
                controller:'personListCtrl'
            }
        }
    }).state("root.organize.management.person.list.delete[12]",{
        url:"/delete[12]",
        views:{
            "modal@root.organize.management.person.list":{
                templateUrl : "root/organize/management/person/list/delete/_res/html/index.html",
                controller:'personDeleteCtrl'
            }
        }
    }).state("root.organize.management.person.list.congeal[12]",{
        url:"/congeal[12]",
        views:{
            "modal@root.organize.management.person.list":{
                templateUrl : "root/organize/management/person/list/congeal/_res/html/index.html",
                controller:'personCongealCtrl'
            }
        }
    })
});