var express = require('express');	const express = require('express');
var path = require('path');	const path = require('path');
var serveStatic = require('serve-static');	const history = require('connect-history-api-fallback');
app = express();	
 app.use(serveStatic(__dirname + '/dist'));	const app = express();
var port = process.env.PORT || 5000;	
 app.listen(port);	const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));
console.log('server started ' + port);