var express = require('express');
var bodyParser = require('body-parser');
var masterNumberObject = {
	numbers: []
}

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/numbers', function(req, res){
	res.send([
		Math.random(),
		Math.random(),
		Math.random(),
		Math.random(),
		Math.random()
	])
})

app.post('/numbers', function(req,res){

})

app.post('/entrypoint', function(req, res){
	console.log('from app.js', req.body.number);

	var numberValue = parseInt(req.body.number);
	masterNumberObject.numbers.push(numberValue)
	console.log(masterNumberObject)
})


var server = app.listen(6321, function() {
	console.log('Express server listening on port ' + server.address().port);
});
