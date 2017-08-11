var Account = require('./Account');

module.exports = {
    Register: function(express){
        var app = express();
        
        Account.Register(app);

        app.listen(888);
    }
}
