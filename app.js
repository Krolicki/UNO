const express = require('express');
const app = express();

//app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));

app.set('views', './views');
app.set('view engine' , 'ejs');

app.get('', (req, res) => {
	
	res.render('index');
	
});

app.listen(81);
console.log('Express App is running on port 81...');
