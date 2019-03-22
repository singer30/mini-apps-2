var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/./public/'));
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

app.get('/api/bitCoin', (req, res) => {
	request('https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-01-01&end=2018-12-31', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			res.send(body)
		} else  {
			console.log(error)
		}
	});
})
app.listen(3000, function() {
  console.log('listening on port 3000!');
});



