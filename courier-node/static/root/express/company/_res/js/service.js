var app = angular.module('companyServer',[]);
app.factory('companySer',function ($http) {
    return {
        menuPermission : menuPermission,
        companyList : companyList,
        countCompany : countCompany,
        addCompany : addCompany,
        findCompanyId : findCompanyId,
        editGetCompany : editGetCompany,
        deleteCompany : deleteCompany,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/couriercompany/guidePermission/'+data);
    }
    //分页查询列表
    function companyList(data) {
        return $http.get('/couriercompany/list',{
            params: data
        })
    }
  //获取总记录数
    function countCompany(){
        return $http.get('/couriercompany/count')
    }

    //添加
    function addCompany(data){
        return $http.post('/couriercompany/save',data)
    }
    //id查询
    function findCompanyId(data){
        return $http.get('/couriercompany/couriercompany',{
            params:data
        })
    }
    //编辑
    function editGetCompany(data){
        return $http.post('/couriercompany/edit',data)
    }
    //删除
    function deleteCompany(data){
        return $http.get('/couriercompany/delete',{
            params: data
        })
    }
});
