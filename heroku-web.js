// var gzippo = require('gzippo');
// var express = require('express');
// var app = express();
// var morgan = require('morgan');
// var logger = morgan('combined');
// var fs = require('fs');
// var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
// app.use(morgan({'combinedstream': accessLogStream}));
// app.use(gzippo.staticGzip("" + __dirname + "/dist"));
// app.listen(process.env.PORT || 5000);


var express = require('express');
var app = express();
var port = Number(process.env.PORT || 3000);
app.use(express.static(__dirname + '/dist'));
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
