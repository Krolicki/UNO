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

var endPoints = 100;
var go = false;

var data = {
	p1 : "",
	p2 : "",
	p3 : "",
	p4 : "",
	p1points : 0, 
	p2points : 0,
	p3points : 0,
	p4points : 0
}

app.get('', (req, res) => {
	if(data.p1 == "" || data.p2 == "")
		res.render('index');
	else
		res.render('game', {data: data});
	
});

app.post('/set',  function(req ,res){
	if(data.p1 == "" || data.p2 == ""){
		data.p1 = req.body.p1;
		data.p2 = req.body.p2;
		endPoints = req.body.eP;
		go = true;
		if(req.body.p3 !="")
			data.p3 = req.body.p3;
		if(req.body.p4 !="")
			data.p4 = req.body.p4;
	}
	res.render('game', {data: data});
	
});

app.post('/update',  function(req ,res){
	if(go){
		let add_points = parseInt(req.body.suma);
		let to_who = req.body.player;
		switch(to_who){
			case 'p1':
				data.p1points += add_points;
				break;
			case 'p2':
				data.p2points += add_points;
				break;
			case 'p3':
				data.p3points += add_points;
				break;
			case 'p4':
				data.p4points += add_points;
				break;
			default:
				break;
		}
	}
	if(data.p1points >= endPoints){
		res.render('win', {winner: 'Wygrywa: ' + data.p1, data : data}); 
		go = false;

	}
	else if(data.p2points >= endPoints){
		res.render('win', {winner: 'Wygrywa: ' + data.p2, data : data}); 
		go = false;
	}
	else if(data.p3points >= endPoints){
		res.render('win', {winner: 'Wygrywa: ' + data.p3, data : data}); 
		go = false;
	}
	else if(data.p3points >= endPoints){
		res.render('win', {winner: 'Wygrywa: ' + data.p4, data : data}); 
		go = false;
	}
	else
		res.render('game', { data : data});
});

app.get('/reload',  function(req ,res){
	res.redirect('/');
});

app.get('/end',  function(req ,res){
	go = false;

	let highest = Math.max(data.p1points, data.p2points, data.p3points, data.p4points);
	let winner = "";
	let count = 0;
	
	if(data.p1points == highest){
		winner += " " + data.p1;
		count++;
	}
	if(data.p2points == highest){
		winner += " " + data.p2;
		count++;
	}
	if(data.p3points == highest){
		winner += " " + data.p3;
		count++;
	}
	if(data.p4points == highest){
		winner += " " + data.p4;
		count++;
	}
	
	if(count > 1 && data.p3 != "")
		res.render('win', {winner: 'Wygrywają:' + winner, data : data});
	else if(count > 1)
		res.render('win', {winner: 'Remis', data : data});
	else
		res.render('win', {winner: 'Wygrywa:' + winner, data : data}); 
});

app.get('/new',  function(req ,res){
	data = {
		p1 : "",
		p2 : "",
		p3 : "",
		p4 : "",
		p1points : 0, 
		p2points : 0,
		p3points : 0,
		p4points : 0
	}
	res.render('');
});


app.listen(81);
console.log('Serwer działa na porcie 81...');
