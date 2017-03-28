var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(__filename)));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();
    //客户级别
    router.get('/customer/customerlevel', function *(){
        yield (sendfile(this, path.resolve('public/pages/business/customer_level.html')));
        if(!this.status){
            this.throw(404);
        }
    }).get('/customer/customerlevel/listCustomerLevel', function*(){
        var $self = this;
        yield (server().customerlevel()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerlevel/add', function*(){
        var addData = this.request.body;
        var $self = this;
        yield (server().customerlevelAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerlevel/edit', function*(){
        var editData = this.request.body;
        var $self = this;
        yield (server().customerlevelEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){//登录超时
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerlevel/delete', function*(){
        var deleteData = this.request.body;
        console.info(deleteData.id);
        var $self = this;
        yield (server().customerlevelDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){//登录超时
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerlevel/congeal', function*(){
        var congealData = this.request.body;
        var $self = this;
        yield (server().customerlevelCongeal(congealData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){//登录超时
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerlevel/thaw', function*(){
        var thawData = this.request.body;
        var $self = this;
        yield (server().customerlevelThaw(thawData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){//登录超时
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/customer/customerbaseinfo', function *(){
        yield (sendfile(this, path.resolve('public/pages/business/customer_basic.html')));
        if(!this.status){
            this.throw(404);
        }
    }).get('/customer/customerbaseinfo/listCustomerBaseInfo', function*(){//客户基本信息
        var $self = this;
        yield (server().listCustomerBaseInfo()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/customer/customerbaseinfo/generateNumber', function*(){//基本信息添加编号
        var $self = this;
        yield (server().customerbaseinfoNumber()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerbaseinfo/add', function*(){//基本信息添加
        var addData = this.request.body;
        var $self = this;
        yield (server().customerbaseinfoAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){//登录超时
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerbaseinfo/edit', function*(){
        var editData = this.request.body;
        var $self = this;
        yield (server().customerbaseinfoEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){//登录超时
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerbaseinfo/delete', function*(){
        var deleteData = this.request.body;
        var $self = this;
        yield (server().customerbaseinfoDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){//登录超时
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerbaseinfo/congeal', function*(){
        var congealData = this.request.body;
        var $self = this;
        yield (server().customerbaseinfoCongeal(congealData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){//登录超时
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerbaseinfo/thaw', function*(){
        var thawData = this.request.body;
        var $self = this;
        yield (server().customerbaseinfoThaw(thawData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){//登录超时
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/customer/customeredetailed', function *(){
        yield (sendfile(this, path.resolve('public/pages/business/customer_detailed.html')));
        if(!this.status){
            this.throw(404);
        }
    }).get('/customer/customerdetail/listCustomerDetail', function*(){//客户详细信息
        var $self = this;

        yield (server().listCustomerDetail()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerdetail/edit', function*(){//客户详细信息编辑
        var editData = this.request.body;
        var $self = this;
        yield (server().customerdetailEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerdetail/delete', function*(){//客户详细信息删除
        var deleteData = this.request.body;
        console.info(deleteData);
        var $self = this;
        yield (server().customerdetailDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerdetail/getInfoByCustomerNum', function*(){//客户详细信息
        var $self = this;
        var getInfoByCustomer = this.request.body;
        yield (server().getInfoByCustomerNum(getInfoByCustomer)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/customer/customerbaseinfo/getCusNum', function*(){//客户编号
        var $self = this;

        yield (server().getCusNum()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerdetail/add', function*(){//h=客户详情添加
        var addData = this.request.body;
        var $self = this;
        yield (server().customerdetailAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerbaseinfo/getCustomer', function*(){//h=获取单个客户编号信息
        var cusNum = this.request.body;
        var $self = this;
        yield (server().getCustomer(cusNum)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/customer/customeremail', function *(){ //客户邮箱
        yield (sendfile(this, path.resolve('public/pages/business/customer_email.html')));
        if(!this.status){
            this.throw(404);
        }
    }).get('/customer/cusemail/listCusEmail', function*(){
        var $self = this;
        yield (server().listCusEmail()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/customer/customerbaseinfo/getWorks', function*(){ //职位列表
        var $self = this;
        yield (server().getWorks()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/cusemail/add', function*(){ //添加邮件
        var addData = this.request.body;
        var $self = this;
        yield (server().cusemailAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/cusemail/edit', function*(){ //编辑邮件
        var editData = this.request.body;
        var $self = this;
        yield (server().cusemailEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/cusemail/delete', function*(){ //编辑邮件
        var deleteData = this.request.body;
        var $self = this;
        yield (server().cusemailDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/cusemail/congeal', function*(){ //编辑邮件
        var congealData = this.request.body;
        var $self = this;
        yield (server().cusemailCongeal(congealData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/cusemail/thaw', function*(){ //编辑邮件
        var thawData = this.request.body;
        var $self = this;
        yield (server().cusemailThaw(thawData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/cusemail/Collect', function*(){ //汇总邮件
        var collectData = this.request.body;
        var $self = this;
        yield (server().cusemailCollect(collectData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    });
    return router;
};
