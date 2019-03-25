var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3001, function() {
  console.log('listening on port 3001!');
});
