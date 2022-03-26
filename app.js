const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine' , 'ejs');

var pla1 ="";
var pla2 ="";

app.get('', (req, res) => {
	if(pla1 == "" && pla2 == "")
		res.render('index');
	else
		res.render('game');
	
});

app.post('/set',  function(req ,res){
	pla1 = req.body.p1;
	pla2 = req.body.p2;
	res.render('game', {data: req.body});
	
});

app.listen(81);
console.log('Express App is running on port 81...');
