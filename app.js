const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine' , 'ejs');

var pla1 ="";
var pla2 ="";
var points_p1 = 0;
var points_p2 = 0;

app.get('', (req, res) => {
	if(pla1 == "" && pla2 == "")
		res.render('index');
	else
		res.render('game', {data: data});
	
});

app.post('/set',  function(req ,res){
	pla1 = req.body.p1;
	pla2 = req.body.p2;
	data = req.body;
	res.render('game', {data: data});
	
});

app.post('/update',  function(req ,res){
	let add_points = parseInt(req.body.suma);
	switch(req.body.player){
		case 'p1':
			points_p1 += add_points;
			break;
		case 'p2':
			points_p2 += add_points;
			break;
		default:
			break;
	}
	res.send('lmao');
});

app.listen(81);
console.log('Express App is running on port 81...');
