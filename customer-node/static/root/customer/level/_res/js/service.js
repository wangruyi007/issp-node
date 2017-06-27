var app = angular.module('levelServer',[]);
app.factory('levelSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listCustomerLevel : listCustomerLevel,
        addCustomerLevel:addCustomerLevel,
        getCustomerLevel:getCustomerLevel,
        editLevel:editLevel,
        deleteLevel:deleteLevel
    };
    function menuPermission(data){
        return $http.get('/customerlevel/guidePermission/'+data);
    }
    function listCustomerLevel() {
        return $http.get('/customer/customerlevel/listCustomerLevel')
    }

    function addCustomerLevel(data) {
        return $http.post('/customer/customerlevel/add',data)
    }
    function getCustomerLevel(data) {
        return $http.post('/customerlevel/getCustomerLevel',data)
    }
    function editLevel(data) {
        return $http.post('/customer/customerlevel/edit',data)
    }
    function deleteLevel(data) {
        return $http.post('/customerlevel/delete',data)
    }


});
