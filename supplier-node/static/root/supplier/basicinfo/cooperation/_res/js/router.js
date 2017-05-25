/**
 * Created by ike on 2017/5/3.
 */
var app = angular.module('cooperationBasic', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.supplier.basicinfo.cooperation",{
        url:"/cooperation?id=",
        views:{
            "content@root.supplier.basicinfo":{
                templateUrl : "root/supplier/basicinfo/cooperation/_res/html/index.html",
                controller:'cooperationBasicCtrl'
            }
        }
    }).state("root.supplier.basicinfo.cooperation.cooperationDelete[12]",{
        url:"/cooperationDelete[12]?suId=",
        views:{
            "modal@root.supplier.basicinfo.cooperation":{
                templateUrl : "root/supplier/basicinfo/cooperation/cooperationDelete/_res/html/index.html",
                controller:'cooperationDeleteCtrl'
            }
        }
    }).state("root.supplier.basicinfo.cooperation.cooperationEdit[12]",{
        url:"/cooperationEdit[12]?suId=",
        views:{
            "content@root.supplier.basicinfo.cooperation":{
                templateUrl : "root/supplier/basicinfo/cooperation/cooperationEdit/_res/html/index.html",
                controller:'cooperationEditCtrl'
            }
        }
    })
});