const fs = require('fs');
const https = require('https');
let express = require('express');
const PORT = 443;
    
let app = express();
https.createServer({
    key: fs.readFileSync('my_cert.key'),
    cert: fs.readFileSync('my_cert.crt')
}, app).listen(PORT, function(){
    console.log("Mi servidor htpp escuchando el puerto: " + PORT + "...");
});
app.get('/Carlos', function(req, res){
    console.log('Hola, Yo soy Carlos.');
});