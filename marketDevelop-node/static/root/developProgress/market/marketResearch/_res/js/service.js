var app = angular.module('researchServer',[]);
app.factory('researchSer',function ($http) {
    return {
        listResearch : listResearch,
        researchAdd:researchAdd,
        researchEdit:researchEdit,
        findResearchId:findResearchId,
        countResearch:countResearch,
        researchDelete:researchDelete
    };
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
});
