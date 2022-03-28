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

var data = {
	p1 : "",
	p2 : "",
	p1points : 0, 
	p2points : 0
}

app.get('', (req, res) => {
	if(data.p1 == "" || data.p2 == "")
		res.render('index');
	else
		res.render('game', {data: data});
	
});

app.post('/set',  function(req ,res){
	data.p1 = req.body.p1;
	data.p2 = req.body.p2;
	res.render('game', {data: data});
	
});

app.post('/update',  function(req ,res){
	let add_points = parseInt(req.body.suma);
	let to_who = req.body.player;
	switch(to_who){
		case 'p1':
			data.p1points += add_points;
			break;
		case 'p2':
			data.p2points += add_points;
			break;
		default:
			break;
	}
	res.render('game', { data : data});
});

app.listen(81);
console.log('Express App is running on port 81...');
