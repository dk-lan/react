var bodyParser = require('body-parser');

var urlencodeParser = bodyParser.urlencoded();
module.exports = {
    Register: function(app){
        app.get('/pro/fetchAllProducts', function(request, response){
            response.send({name: '娃哈哈1号 15ml', price: '10.22'});
            //请求数据库 根据商品条形码找到对应商品
        })
    }
}