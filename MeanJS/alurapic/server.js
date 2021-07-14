var http = require('http');
var app = require('./config/express');
require('./config/database')('mongodb://localhost/alurapic');

const port = 3000

http.createServer(app)
.listen(port, function() {
	console.log(`Servidor iniciado http://localhost:${port}`);
});