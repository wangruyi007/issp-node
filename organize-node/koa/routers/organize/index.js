var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename, '../')) + '/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();


    router.get('/designNumberInfo/list', function*(){ //编号设计列表
        var $self = this;
        var page = $self.request.query;
        yield (server().numberList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/designNumberInfo/count', function*(){ //编号设计总条数
        var $self = this;
        yield (server().numberCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/designNumberInfo/add', function*(){  //添加编号设计
        var $self = this;
        var data = this.request.body;
        data.token = $self.cookies.get('token');
        yield (server().numberAdd(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/designNumberInfo/getnumber', function*(){ //根据ID获取编号设计
        var $self = this;
        var numGet = this.request.query;
        yield (server().numberGet(numGet)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/designNumberInfo/edit', function*(){  //添加编号设计
        var $self = this;
        var data = this.request.body;
        data.token = $self.cookies.get('token');
        yield (server().numberEdit(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/designNumberInfo/delete', function*(){ //删除获取编号设计
        var $self = this;
        var deleteId = this.request.query;
        deleteId.token = $self.cookies.get('token');
        yield (server().numberDelete(deleteId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hierarchy/maps', function*(){ //体系列表
        var $self = this;
        var page = $self.request.query;
        yield (server().systemList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hierarchy/getTotal', function*(){ //体系列表
        var $self = this;
        yield (server().systemCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/hierarchy/save', function*(){ //添加体系
        var $self = this;
        var addData=this.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().systemAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hierarchy/findById', function*(){ //根基ID获取体系
        var $self = this;
        var ststemId = $self.request.query;
        yield (server().systemGet(ststemId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/hierarchy/edit', function*(){ //编辑体系
        var $self = this;
        var editData=this.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().systemEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hierarchy/delete', function*(){ //删除体系
        var $self = this;
        var deleteId = $self.request.query;
        deleteId.token = $self.cookies.get('token');
        yield (server().systemDelete(deleteId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hierarchy/congeal', function*(){ //删除体系
        var $self = this;
        var congealId = $self.request.query;
        congealId.token = $self.cookies.get('token');
        yield (server().systemCongeal(congealId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hierarchy/thaw', function*(){ //解冻体系
        var $self = this;
        var thawId = $self.request.query;
        thawId.token = $self.cookies.get('token');
        yield (server().systemThaw(thawId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/department/maps', function*(){ //部门列表
        var $self = this;
        var page = $self.request.query;
        yield (server().departmentList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/department/getTotal', function*(){ //部门总条数
        var $self = this;
        var page = $self.request.query;
        yield (server().departmentCount(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hierarchy/findStatus', function*(){ //获取体系
        var $self = this;
        yield (server().departGetSystem()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/department/save', function*(){ //添加部门
        var $self = this;
        var addData = this.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().departmentAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/department/findById', function*(){ //根据ID获取部门信息
        var $self = this;
        var departmentId = this.request.query;
        yield (server().departmentGet(departmentId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/department/edit', function*(){ //编辑部门信息
        var $self = this;
        var editData = this.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().departmentEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/department/delete', function*(){ //删除部门信息
        var $self = this;
        var delId = this.request.query;
        delId.token = $self.cookies.get('token');
        yield (server().departmentDelete(delId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/department/congeal', function*(){ //冻结部门信息
        var $self = this;
        var congealId = this.request.query;
        congealId.token = $self.cookies.get('token');
        yield (server().departmentCongeal(congealId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/department/thaw', function*(){ //解冻部门信息
        var $self = this;
        var thawId = this.request.query;
        thawId.token = $self.cookies.get('token');
        yield (server().departmentThaw(thawId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/department/departRange', function*(){
        var $self = this;
        var token = {token:$self.cookies.get('token')};
        yield (server().departRange(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/department/viewRange', function*(){
        var $self = this;
        var viewId = this.request.query;
        viewId.token = $self.cookies.get('token');
        yield (server().viewRange(viewId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/postlevel/maps', function*(){ //部门列表
        var $self = this;
        var page = $self.request.query;
        yield (server().postlevelList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/postlevel/getTotal', function*(){ //部门列表
        var $self = this;
        yield (server().postlevelCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/postlevel/parent', function*(){ //获取上层
        var $self = this;
        yield (server().postlevelParent()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/postlevel/add', function*(){ //添加
        var $self = this;
        var addData = this.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().postlevelAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/postlevel/findById', function*(){
        var $self = this;
        var postlevelId = this.request.query;
        yield (server().postlevelGet(postlevelId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/postlevel/delete', function*(){
        var $self = this;
        var delId = this.request.query;
        delId.token = $self.cookies.get('token');
        yield (server().postlevelDel(delId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/posts/maps', function*(){ //岗位列表
        var $self = this;
        var page = $self.request.query;
        yield (server().postsList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/posts/getTotal', function*(){ //岗位列表
        var $self = this;
        yield (server().postsCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/posts/getDepartList', function*(){ //获取部门
        var $self = this;
        var inclu = this.request.query;
        yield (server().getDepartList(inclu)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/posts/getArrangement', function*(){ //获取层级
        var $self = this;
        yield (server().getArrangement()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/posts/getModule', function*(){ //获取模块
        var $self = this;
        yield (server().getModule()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/posts/add', function*(){ //添加
        var $self = this;
        var addData=this.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().postsAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/posts/findById', function*(){ //根据ID获取岗位信息
        var $self = this;
        var findById=this.request.query;
        yield (server().postsGet(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/posts/edit', function*(){ //根据ID获取岗位信息
        var $self = this;
        var editData=this.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().postsEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/posts/delete', function*(){ //删除岗位信息
        var $self = this;
        var delId=this.request.query;
        delId.token = $self.cookies.get('token');
        yield (server().postsDelete(delId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/posts/congeal', function*(){ //冻结岗位信息
        var $self = this;
        var conId=this.request.query;
        conId.token = $self.cookies.get('token');
        yield (server().postsCongeal(conId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/posts/thaw', function*(){ //冻结岗位信息
        var $self = this;
        var thawId=this.request.query;
        thawId.token = $self.cookies.get('token');
        yield (server().postsThaw(thawId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/posts/getAngle', function*(){ //获取角度
        var $self = this;
        yield (server().getAngle()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/posts/getDimension', function*(){ //获取维度
        var $self = this;
        yield (server().getDimension()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/posts/getClassify', function*(){ //获取维度
        var $self = this;
        yield (server().getClassify()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/posts/getReflect', function*(){ //获取
        var $self = this;
        yield (server().getReflect()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/posts/getOperate', function*(){ //获取维度
        var $self = this;
        yield (server().getOperate()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/posts/getPostId', function*(){ //获取维度
        var $self = this;
        var getId = this.request.query;
        yield (server().getPostId(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/posts/explainAdd', function*(){
        var $self = this;
        var addExpainData = this.request.body;
        addExpainData.token = $self.cookies.get('token');
        yield (server().explainAdd(addExpainData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/posts/getPostsDetail', function*(){
        var $self = this;
        var id = this.request.query;
        yield (server().getPostsDetail(id)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/motype/maps', function*(){ //模块类型列表
        var $self = this;
        var page=this.request.query;
        yield (server().motypeList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/motype/getTotal', function*(){ //模块类型列表总条数
        var $self = this;
        yield (server().motypeCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/motype/add', function*(){ //模块类型添加
        var $self = this;
        var addData = this.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().motypeAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/motype/findById', function*(){ //根据ID获取模块类型
        var $self = this;
        var getId = this.request.query;
        yield (server().motypeGet(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/motype/edit', function*(){ //根据ID获取模块类型
        var $self = this;
        var editData = this.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().motypeEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/motype/delete', function*(){ //根据ID获取模块类型
        var $self = this;
        var delId = this.request.query;
        yield (server().motypeDelete(delId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/motype/congeal', function*(){ //根据ID获取模块类型
        var $self = this;
        var conId = this.request.query;
        yield (server().motypeCongeal(conId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/motype/thaw', function*(){ //根据ID获取模块类型
        var $self = this;
        var thawId = this.request.query;
        yield (server().motypeThaw(thawId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).get('/listReflect/maps', function*(){ //体现类别列表
        var $self = this;
        var page = $self.request.query;
        yield (server().reflectList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countReflect/getTotal', function*(){ //体现类别
        var $self = this;
        var getId = this.request.query;
        yield (server().getReflectCountId(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/congealReflect/congeal', function*(){ //体系冻结
        var $self = this;
        var congealId = $self.request.query;
        congealId.token = $self.cookies.get('token');
        yield (server().reflectCongeal(congealId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/thawReflect/thaw', function*(){ //体系解冻
        var $self = this;
        var thawId = $self.request.query;
        thawId.token = $self.cookies.get('token');
        yield (server().reflectThaw(thawId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })
        .post('/addReflect/save', function*(){   //体现类别添加
            var $self = this;
            var addData = this.request.body;
            addData.token = $self.cookies.get('token');
            yield (server().reflectAdd(addData)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                    console.error(error.error);
                }));
        }).get('/deleteReflect/delete', function*(){ //删除体现类别
        var $self = this;
        var delId=this.request.query;
        delId.token = $self.cookies.get('token');
        yield (server().reflectDelete(delId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getReflect/findById', function*(){ //体现类别编辑
        var $self = this;
        var findById=this.request.query;
        yield (server().reflectGetById(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editReflect/edit', function*(){ //体现类别编辑
        var $self = this;
        var editData=this.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().reflectEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/listJopDes/maps', function*(){ //岗位说明列表
        var $self = this;
        var page = $self.request.query;
        yield (server().jopDesList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countJopDes/getTotal', function*(){ //岗位说明
        var $self = this;
        var getId = this.request.query;
        yield (server().getJopDesCountId(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getPositionId/id', function*(){ //id
        var $self = this;
        yield (server().positionGetById()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getJopDesById/findById', function*(){ //根据ID获取说明书
        var $self = this;
        var findById=this.request.query;
        yield (server().jopDesGetById(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editJopDes/edit', function*(){ //编辑
        var $self = this;
        var editData=this.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().jopDesEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/jopDes/delete', function*(){ //删除
        var $self = this;
        var delId=this.request.query;
        delId.token = $self.cookies.get('token');
        yield (server().jopDesDelete(delId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/listJopDetail/maps', function*(){ //岗位工作明细列表
        var $self = this;
        var page = $self.request.query;
        yield (server().jopDetailList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countJopDetail/getTotal', function*(){ //岗位工作明细
        var $self = this;
        var getId = this.request.query;
        yield (server().getJopDetailCountId(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/jopdetail/getPosiInst', function*(){ //获取岗位说明书
        var $self = this;
        yield (server().getPosiInst()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/jopdetail/add', function*(){ //获取岗位说明书
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().jopdetailAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/jopdetail/findById', function*(){ //根据获取岗位说明书
        var $self = this;
        var id = $self.request.query;
        yield (server().jopdetailGet(id)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/jopdetail/edit', function*(){ //编辑岗位说明书
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().jopdetailEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/jopdetail/delete', function*(){ //删除岗位说明书
        var $self = this;
        var delId = $self.request.query;
        delId.token = $self.cookies.get('token');
        yield (server().jopdetailDelete(delId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/listReflect/maps', function*(){ //体现类别列表
        var $self = this;
        var page = $self.request.query;
        yield (server().reflectList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countReflect/getTotal', function*(){ //体现类别
        var $self = this;
        var getId = this.request.query;
        yield (server().getReflectCountId(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/addReflect/save', function*(){   //体现类别添加
        var $self = this;
        var addData = this.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().reflectAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/deleteReflect/delete', function*(){ //删除体现类别
        var $self = this;
        var delId=this.request.query;
        delId.token = $self.cookies.get('token');
        yield (server().reflectDelete(delId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getReflect/findById', function*(){ //体现类别编辑
        var $self = this;
        var findById=this.request.query;
        yield (server().reflectGetById(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editReflect/edit', function*(){ //体现类别编辑
        var $self = this;
        var editData=this.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().reflectEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/listJopDes/maps', function*(){ //岗位说明列表
        var $self = this;
        var page = $self.request.query;
        yield (server().jopDesList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countJopDes/getTotal', function*(){ //岗位说明
        var $self = this;
        var getId = this.request.query;
        yield (server().getJopDesCountId(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getDepartmentId/id', function*(){ //岗位说明id
        var $self = this;
        yield (server().departmentGetById()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/addJopDes/save', function*(){   //岗位说明添加
        var $self = this;
        var addData = this.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().jopDesAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getAngleId/id', function*(){ //id
        var $self = this;
        yield (server().angleGetById()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getDimensionId/id', function*(){ //id
        var $self = this;
        yield (server().dimensionById()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getInstructionClassifyId/id', function*(){ //id
        var $self = this;
        yield (server().dimensionById()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/operate/maps', function*(){ //操作类型列表
        var $self = this;
        var page = $self.request.query;
        yield (server().operateList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/userjop/maps', function*(){ //获取用户职位列表
        var $self = this;
        var page = this.request.query;
        yield (server().userjopMaps(page)

            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).get('/operate/getTotal', function*(){ //获取操作类型总条数
        var $self = this;
        yield (server().operateCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/userjop/getTotal', function*(){ //获取用户职位列表
        var $self = this;
        yield (server().userjopCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).get('/userjop/getUser', function*(){ //获取用户职位列表
        var $self = this;
        yield (server().getUser()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).get('/userjop/getPosition', function*(){ //获取职位
        var $self = this;
        var includes = this.request.query;
        yield (server().getPosition(includes)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).post('/userjop/add', function*(){ //添加职位
        var $self = this;
        var addData=$self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().userjopAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).post('/userjop/edit', function*(){ //编辑职位
        var $self = this;
        var editData=$self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().userjopEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).get('/userjop/findById', function*(){ //根据ID获取职位
        var $self = this;
        var id=$self.request.query;
        yield (server().userjopGet(id)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).get('/userjop/delete', function*(){ //根据ID获取职位
        var $self = this;
        var id=$self.request.query;
        yield (server().userjopDelete(id)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).post('/operate/save', function*(){ //操作类型添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().operateAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/joprange/maps', function*(){ //获取项目工作部门范围
        var $self = this;
        var page = this.request.query;
        yield (server().joprangeMaps(page)

            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).get('/operate/findById', function*(){ //根据ID获取操作类型数据
        var $self = this;
        var findId = $self.request.query;
        yield (server().operateGetId(findId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/joprange/getTotal', function*(){ //获取项目工作部门范围总条数
        var $self = this;
        yield (server().joprangeCounts()

            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).post('/operate/update', function*(){ //操作类型编辑
        var $self = this;
        var editData=$self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().operateEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/joprange/add', function*(){ //添加项目工作部门范围
        var $self = this;
        var addData = this.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().joprangeAdd(addData)

            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).get('/operate/delete', function*(){ //操作类型删除
        var $self = this;
        var delId=$self.request.query;
        delId.token = $self.cookies.get('token');
        yield (server().operateDelete(delId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/joprange/delete', function*(){ //删除项目工作部门范围
        var $self = this;
        var delId = this.request.query;
        delId.token = $self.cookies.get('token');
        yield (server().joprangeDelete(delId)

            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).get('/joprange/getDirection', function*(){ //项目工作部门范围获取方向
        var $self = this;
        yield (server().getDirection()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).get('/joprange/getProject', function*(){ //项目工作部门范围获取科目
        var $self = this;
        yield (server().getProject()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).get('/joprange/findClassify', function*(){ //项目工作部门范围获取分类
        var $self = this;
        yield (server().findClassify()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).get('/joprange/findById', function*(){ //根据ID项目工作部门范围
        var $self = this;
        var id = $self.request.query;
        yield (server().joprangeGet(id)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).post('/joprange/edit', function*(){ //编辑项目工作部门范围
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().joprangeEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    }).get('/operate/close', function*(){ //操作类型冻结
        var $self = this;
        var congealId=$self.request.query;
        congealId.token = $self.cookies.get('token');
        yield (server().operateCongeal(congealId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/operate/open', function*(){ //操作类型解冻
        var $self = this;
        var thawId=$self.request.query;
        thawId.token = $self.cookies.get('token');
        yield (server().operateThaw(thawId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/angle/maps', function*(){ //角度列表
        var $self = this;
        var page = $self.request.query;
        yield (server().angleList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/angle/getTotal', function*(){ //获取角度总条数
        var $self = this;
        yield (server().angleCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/angle/save', function*(){ //角度添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().angleAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/angle/findById', function*(){ //根据ID获取角度数据
        var $self = this;
        var findId = $self.request.query;
        yield (server().angleGetId(findId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/angle/update', function*(){ //角度编辑
        var $self = this;
        var editData=$self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().angleEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/angle/delete', function*(){ //角度删除
        var $self = this;
        var delId=$self.request.query;
        delId.token = $self.cookies.get('token');
        yield (server().angleDelete(delId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/angle/close', function*(){ //角度冻结
        var $self = this;
        var congealId=$self.request.query;
        congealId.token = $self.cookies.get('token');
        yield (server().angleCongeal(congealId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/angle/open', function*(){ //角度解冻
        var $self = this;
        var thawId=$self.request.query;
        thawId.token = $self.cookies.get('token');
        yield (server().angleThaw(thawId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dimension/maps', function*(){ //维度列表
        var $self = this;
        var page = $self.request.query;
        yield (server().dimenList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dimension/getTotal', function*(){ //获取维度总条数
        var $self = this;
        yield (server().dimenCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/dimension/save', function*(){ //维度添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().dimenAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dimension/findById', function*(){ //根据ID获取维度数据
        var $self = this;
        var findId = $self.request.query;
        yield (server().dimenGetId(findId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/dimension/update', function*(){ //维度编辑
        var $self = this;
        var editData=$self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().dimenEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dimension/delete', function*(){ //维度删除
        var $self = this;
        var delId=$self.request.query;
        delId.token = $self.cookies.get('token');
        yield (server().dimenDelete(delId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dimension/close', function*(){ //维度冻结
        var $self = this;
        var congealId=$self.request.query;
        congealId.token = $self.cookies.get('token');
        yield (server().dimenCongeal(congealId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dimension/open', function*(){ //维度解冻
        var $self = this;
        var thawId=$self.request.query;
        thawId.token = $self.cookies.get('token');
        yield (server().dimenThaw(thawId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/instructionClassify/maps', function*(){ //分类列表
        var $self = this;
        var page = $self.request.query;
        yield (server().classifyList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/instructionClassify/getTotal', function*(){ //获取分类总条数
        var $self = this;
        yield (server().classifyCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/instructionClassify/save', function*(){ //分类添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().classifyAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/instructionClassify/findById', function*(){ //根据ID获取分类数据
        var $self = this;
        var findId = $self.request.query;
        yield (server().classifyGetId(findId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/instructionClassify/update', function*(){ //分类编辑
        var $self = this;
        var editData=$self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().classifyEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/instructionClassify/delete', function*(){ //分类删除
        var $self = this;
        var delId=$self.request.query;
        delId.token = $self.cookies.get('token');
        yield (server().classifyDelete(delId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/instructionClassify/close', function*(){ //分类冻结
        var $self = this;
        var congealId=$self.request.query;
        congealId.token = $self.cookies.get('token');
        yield (server().classifyCongeal(congealId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/instructionClassify/open', function*(){ //分类解冻
        var $self = this;
        var thawId=$self.request.query;
        thawId.token = $self.cookies.get('token');
        yield (server().classifyThaw(thawId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/joprange/congeal', function*(){ //东街项目工作部门范围
        var $self = this;
        var conId = this.request.query;
        conId.token = $self.cookies.get('token');
        yield (server().joprangeCongeal(conId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/joprange/thaw', function*(){ //解冻项目工作部门范围
        var $self = this;
        var thawId = this.request.query;
        thawId.token = $self.cookies.get('token');
        yield (server().joprangeThaw(thawId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/userjop/positionuser', function*(){
        var $self = this;
        var getId = this.request.query;
        getId.token = $self.cookies.get('token');
        yield (server().positionuser(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })
    return router;
};
