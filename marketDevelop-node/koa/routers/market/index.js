var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
var koaBody = require('koa-body');
var request = require('request-promise');
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var fileType = require(path.resolve('plugins/fileType.js'));
module.exports = function(){
    var router = new Router();

    router.get('/demandanalysis/guidePermission/:guideAddrStatus', function*(){ //菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().demandGuidePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/market/demandanalysis/maps', function*(){ //需求分析列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().demandList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/demandanalysis/save', function*(){//需求分析添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().demandAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/demandanalysis/update', function*(){//修改需求分析
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().analysisEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/demandanalysis/findById', function*(){//ID查询需求分析
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().findAnalysisId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/demandanalysis/delete', function*(){//删除需求分析
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().analysisDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/demandanalysis/getTotal', function*(){//获取需求分析总条数
        var $self = this;
        var countToken = {userToken: $self.cookies.get('token')};
        yield (server().getAnalysisTotal(countToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/demandanalysis/uploadEnclosure', koaBody({multipart:true}),function *(next) {//上传文件 需求分析
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.userToken = $self.cookies.get("token");
        yield (server().analysisUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/demandanalysis/listFile', function*(){ //查看附件 需求分析
        var $self = this;
        var enData = $self.request.query;
        enData.userToken = $self.cookies.get('token');
        yield (server().listFileAnalysis(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/demandanalysis/downloadFile', function*(){//文件下载 需求分析
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['market']['rurl']+`/demandanalysis/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/demandanalysis/deleteFile', koaBody({multipart:true}), function*(){//需求分析 删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().delFileAnalysis(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/demandanalysis/exportExcel', function*(){//导出 需求分析
        var $self = this;
        var count = $self.request.query;
        var fileName = count.type+'.xlsx';
        yield (fetch(config()['market']['rurl']+`/demandanalysis/v1/exportExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/targetinformation/guidePermission/:guideAddrStatus', function*(){ //目标信息菜单功能权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().targetGuidePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/market/targetinformation/maps', function*(){  //目标信息列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().targetList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/targetinformation/save', function*(){//添加目标信息
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().targetAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/targetinformation/update', function*(){//修改目标信息
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().targetEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/targetinformation/findById', function*(){//ID查询目标信息
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().findTargetId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/targetinformation/delete', function*(){//删除目标信息
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().targetDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/targetinformation/getTotal', function*(){//获取目标信息总条数
        var $self = this;
        var countToken = {userToken: $self.cookies.get('token')};
        yield (server().getTargetTotal(countToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/targetinformation/uploadEnclosure', koaBody({multipart:true}),function *(next) {//上传文件 目标信息
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.userToken = $self.cookies.get("token");
        yield (server().targetUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/targetinformation/listFile', function*(){ //查看附件 目标信息
        var $self = this;
        var enData = $self.request.query;
        enData.userToken = $self.cookies.get('token');
        yield (server().listFileTarget(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/targetinformation/downloadFile', function*(){//文件下载 目标信息
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['market']['rurl']+`/targetinformation/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/targetinformation/deleteFile', koaBody({multipart:true}), function*(){//目标信息 删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().delFileTarget(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/targetinformation/exportExcel', function*(){//导出 目标信息
        var $self = this;
        var count = $self.request.query;
        var fileName = count.type+'.xlsx';
        yield (fetch(config()['market']['rurl']+`/targetinformation/v1/exportExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/marketchannel/guidePermission/:guideAddrStatus', function*(){ //市场挖掘菜单功能权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().channelGuidePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/market/marketchannel/maps', function*(){  //市场挖掘列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().marketList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/marketchannel/save', function*(){//添加市场挖掘
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().channelAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/marketchannel/update', function*(){//修改市场挖掘
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().marketEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketchannel/findById', function*(){//ID查询市场挖掘
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().findMarketId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketchannel/delete', function*(){//删除市场挖掘
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().channelDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketchannel/getTotal', function*(){//获取市场挖掘总条数
        var $self = this;
        var countToken = {userToken: $self.cookies.get('token')};
        yield (server().getChannelTotal(countToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/marketchannel/uploadEnclosure', koaBody({multipart:true}),function *(next) {//上传文件 市场挖掘
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.userToken = $self.cookies.get("token");
        yield (server().targetUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/marketchannel/listFile', function*(){ //查看附件 市场挖掘
        var $self = this;
        var enData = $self.request.query;
        enData.userToken = $self.cookies.get('token');
        yield (server().listFileTarget(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/marketchannel/downloadFile', function*(){//文件下载 市场挖掘
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['market']['rurl']+`/marketchannel/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/marketchannel/deleteFile', koaBody({multipart:true}), function*(){//市场挖掘 删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().delFileTarget(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/marketchannel/exportExcel', function*(){//导出 市场挖掘
        var $self = this;
        var count = $self.request.query;
        var fileName = count.type+'.xlsx';
        yield (fetch(config()['market']['rurl']+`/marketchannel/v1/exportExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/marketresearch/guidePermission/:guideAddrStatus', function*(){ //市场调研菜单功能权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().researchGuidePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/market/marketresearch/maps', function*(){  //市场调研列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().researchList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/marketresearch/save', function*(){//添加市场调研
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().searchAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/marketresearch/update', function*(){//修改市场调研
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().researchEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketresearch/findById', function*(){//ID查询市场调研
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().findSearchId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketresearch/delete', function*(){//删除市场调研
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().deleteResearch(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketresearch/getTotal', function*(){//获取市场调研总条数
        var $self = this;
        var countToken = {userToken: $self.cookies.get('token')};
        yield (server().getResearchTotal(countToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/marketresearch/uploadEnclosure', koaBody({multipart:true}),function *(next) {//上传文件 市场调研
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.userToken = $self.cookies.get("token");
        yield (server().ResearchUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/marketresearch/listFile', function*(){ //查看附件 市场调研
        var $self = this;
        var enData = $self.request.query;
        enData.userToken = $self.cookies.get('token');
        yield (server().listFileResearch(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/marketresearch/downloadFile', function*(){//文件下载 市场调研
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['market']['rurl']+`/marketresearch/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/marketresearch/deleteFile', koaBody({multipart:true}), function*(){//市场调研 删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().delFileResearch(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/marketresearch/exportExcel', function*(){//导出 市场调研
        var $self = this;
        var count = $self.request.query;
        var fileName = count.type+'.xlsx';
        yield (fetch(config()['market']['rurl']+`/marketresearch/v1/exportExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/marketmeasure/guidePermission/:guideAddrStatus', function*(){ //市场测算菜单功能权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().measureGuidePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/market/marketmeasure/maps', function*(){  //市场测算列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().measureList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/marketmeasure/save', function*(){//添加市场测算
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().measureAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/market/marketmeasure/update', function*(){//修改市场测算
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().measureEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketmeasure/findById', function*(){//ID查询市场测算
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().findMeasureId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketmeasure/delete', function*(){//删除市场测算
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().deleteMeasure(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/market/marketmeasure/getTotal', function*(){//获取市场测算总条数
        var $self = this;
        var countToken = {userToken:$self.cookies.get('token')};
        yield (server().getMeasureTotal(countToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/marketmeasure/uploadEnclosure', koaBody({multipart:true}),function *(next) {//上传文件 市场测算
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.userToken = $self.cookies.get("token");
        yield (server().measureUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/marketmeasure/listFile', function*(){ //查看附件 市场测算
        var $self = this;
        var enData = $self.request.query;
        enData.userToken = $self.cookies.get('token');
        yield (server().listFileMeasure(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/marketmeasure/downloadFile', function*(){//文件下载 市场测算
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['market']['rurl']+`/marketmeasure/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/marketmeasure/deleteFile', koaBody({multipart:true}), function*(){//市场测算 删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().delFileMeasure(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/marketmeasure/exportExcel', function*(){//导出 市场测算
        var $self = this;
        var count = $self.request.query;
        var fileName = count.type+'.xlsx';
        yield (fetch(config()['market']['rurl']+`/marketmeasure/v1/exportExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    })
    return router;
};
