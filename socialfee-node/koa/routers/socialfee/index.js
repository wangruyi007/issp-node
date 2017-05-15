var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();
    
    //列表 税金管理  
    router.get('/socialfee/mainfee/list', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().socialfeeList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/socialfee/mainfee/count', function*(){
        var $self = this;
        yield (server().socialfeeCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //添加
    }).post('/socialfee/mainfee/add', function*(){
            var addData = this.request.body;
            addData.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().socialfeeAdd(addData)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        //编辑ID
    }).post('/socialfee/mainfee/getOneById', function*(){
            var EditId = this.request.body;
            EditId.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().socialfeeById(EditId)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                        $self.body = {'msg' : '请求错误！', errno : 3};
                        $self.status = 408;marketserveapplyDelete
                    }
                }));
            //编辑
    }).post('/socialfee/mainfee/editData', function*(){
                var EditData = this.request.body;
                EditData.userToken = this.cookies.get('token');
                var $self = this;
                yield (server().socialfeeEidt(EditData)
                    .then((parsedBody) =>{
                        var responseText = JSON.parse(parsedBody);
                        $self.body = responseText;
                    }).catch((error) =>{
                         $self.set('Content-Type','application/json;charset=utf-8');
                         $self.body=error.error;
                    }));
        //删除
    }).post('/socialfee/mainfee/delete', function*(){
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().socialfeeDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
         //汇总
    }).get('/socialfee/mainfee/companyList', function*(){
       var $self = this;
       var viewData = this.request.query;
        yield (server().companyList(viewData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/socialfee/mainfee/allPayfeer', function*(){
       var $self = this;
       var allPayfeerData = this.request.query;
        yield (server().allPayfeer(allPayfeerData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/socialfee/mainfee/allname', function*(){
       var $self = this;
       var allNameData = this.request.query;
        yield (server().allName(allNameData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/socialfee/mainfee/generate', function*(){
       var $self = this;
       var generateData = this.request.query;
        yield (server().generate(generateData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).post('/socialfee/mainfee/voucher', function*(){
                var voucherData = this.request.body;
                voucherData.userToken = this.cookies.get('token');
                var $self = this;
                yield (server().voucher(voucherData)
                    .then((parsedBody) =>{
                        var responseText = JSON.parse(parsedBody);
                        $self.body = responseText;
                    }).catch((error) =>{
                         $self.set('Content-Type','application/json;charset=utf-8');
                         $self.body=error.error;
                    }));
    })

    return router;
};
