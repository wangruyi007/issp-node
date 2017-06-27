var app = angular.module('researchServer',[]);
app.factory('researchSer',function ($http) {
    return {
        menuPermission : menuPermission,
        listResearch : listResearch,
        researchAdd:researchAdd,
        researchEdit:researchEdit,
        findResearchId:findResearchId,
        countResearch:countResearch,
        researchDelete:researchDelete,
        getType:getType,
        getCourse:getCourse,
        viewFiles:viewFiles
    };
    //菜单功能权限
    function menuPermission(data) {
        return $http.get('/marketresearch/guidePermission/'+data);
    }
    //列表
    function listResearch(data) {
        return $http.get('/market/marketresearch/maps',{
            params: data

        })
    }

    //添加
    function researchAdd(data){
        return $http.post('/market/marketresearch/save',data)
    }
    //编辑
    function researchEdit(data){
        return $http.post('/market/marketresearch/update',data)
    }
    //id查询
    function findResearchId(data){
        return $http.get('/market/marketresearch/findById',{
            params:data
        })
    }
    //分页总条数
    function countResearch(){
        return $http.get('/market/marketresearch/getTotal')
    }
    //删除
    function researchDelete(data){

        return $http.get('/market/marketresearch/delete',{
            params: data

        })
    }
    //获取业务类型
    function getType(){
        return $http.get('/businesstype/findThaw')
    }
    //获取业务方向科目数据
    function getCourse(){
        return $http.get('/businesscourse/findThaw')
    }
    //附件列表
    function viewFiles(data){
        return $http.get('/marketresearch/listFile',{params:data})
    }
});
