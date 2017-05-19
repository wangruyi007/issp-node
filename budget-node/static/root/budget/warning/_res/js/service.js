var app = angular.module('warningServer',[]);
app.factory('warningSer',function ($http) {
    return {
        listWarning : listWarning,
        countWarning:countWarning,
        addWarning:addWarning,
        getWarning:getWarning,
        editWarning:editWarning,
        deleteWarning:deleteWarning,
        allCostProjects:allCostProjects,
        allCostArea:allCostArea,
    };
    function listWarning(data) {
        return $http.get('/listWarning/lit',{params:data})
    }
    function countWarning() {
        return $http.get('/countWarning/count')
    }
    function addWarning(data) {
        return $http.post('/addWarning/add',data)
    }
    function getWarning(data) {
        return $http.get('/getWarning/id',{params:data})
    }
    function editWarning(data) {
        return $http.post('/editWarning/edit',data)
    }
    function deleteWarning(data) {
        return $http.get('/deleteWarning/delete',{params:data})
    }
  //项目所有周
    function allCostProjects() {
        return $http.get('/allCostProjects/id')
    }
    //地区所有周
    function allCostArea() {
        return $http.get('/allCostArea/id')
    }
});
